// import React, { Fragment, useEffect } from "react";
// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   styled,
//   TextareaAutosize,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { CloudUpload } from "lucide-react";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm, Controller } from "react-hook-form";
// import { submitApplication, resetApplyState } from "../redux/applySlice";

// const schema = yup.object({
//   firstname: yup.string().required("First name is required"),
//   lastname: yup.string().required("Last name is required"),
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   phone: yup
//     .string()
//     .matches(/^[0-9+()\-\s]{7,20}$/, "Enter a valid phone number")
//     .required("Phone is required"),
//   position: yup.string().required("Select the position"),
//   experience: yup
//     .number()
//     .typeError("Experience must be a number")
//     .required("Experience is required")
//     .min(0)
//     .max(60),
//   coverletter: yup
//     .string()
//     .max(3000, "Cover letter cannot exceed 3000 characters"),
//   portfolioUrl: yup
//     .string()
//     .url("Enter a valid URL")
//     .nullable()
//     .notRequired()
//     .transform((value, originalValue) =>
//       originalValue === "" ? null : value
//     ),
//   aboutus: yup.string().nullable().notRequired(),
//   resume: yup
//     .mixed()
//     .test("required", "Please upload your resume", (value) => {
//       return value && value.length > 0;
//     }),
// });

// export const ApplyNow = () => {
//   const dispatch = useDispatch();
//   const applySlice = useSelector((s) => s.apply);

//   const {
//     control,
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       phone: "",
//       position: "",
//       experience: "",
//       coverletter: "",
//       portfolioUrl: "",
//       aboutus: "",
//       resume: null,
//     },
//   });

//   useEffect(() => {
//     if (applySlice.status === "succeeded") {
//       alert("Application submitted. Thank you!");
//       reset();
//       dispatch(resetApplyState());
//     } else if (applySlice.status === "failed") {
//       alert("Submit failed: " + applySlice.error);
//       dispatch(resetApplyState());
//     }
//   }, [applySlice.status, applySlice.error, dispatch, reset]);

//   const onSubmit = async (data) => {
//     const fd = new FormData();

//     fd.append("firstname", data.firstname);
//     fd.append("lastname", data.lastname);
//     fd.append("email", data.email);
//     fd.append("phone", data.phone);
//     fd.append("position", data.position);
//     fd.append("experience", data.experience);
//     fd.append("coverletter", data.coverletter || "");
//     fd.append("portfolioUrl", data.portfolioUrl || "");
//     fd.append("aboutus", data.aboutus || "");

//     const files = data.resume instanceof FileList ? data.resume : [];
//     for (let i = 0; i < files.length; i++) {
//       fd.append("resume", files[i]);
//     }

//     dispatch(submitApplication(fd));
//   };

//   const VisuallyHiddenInput = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//   });

//   const whiteField = {
//     "& .MuiOutlinedInput-root": {
//       color: "white",
//       borderRadius: "5px",
//       "& fieldset": {
//         borderColor: "rgba(255,255,255,0.5)",
//       },
//       "&:hover fieldset": {
//         borderColor: "#ffffff",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#00eaff",
//         boxShadow: "0 0 10px #00eaff55",
//       },
//     },
//     "& .MuiInputLabel-root": {
//       color: "white",
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#00eaff",
//     },
//   };

//   return (
//     <Fragment>
//       <div className="mx-auto bg-black py-10 px-3">
//         <div className="bg-gradient-to-br from-[#000000] via-[#581C87] to-[#000000] py-30 text-center mb-10">
//           <h1 className="text-3xl md:text-7xl text-blue-600 mb-3 md:mb-5">
//             Apply Now
//           </h1>
//           <h5 className="text-lg md:text-xl text-slate-300">
//             Take the first step towards an exciting career with us
//           </h5>
//         </div>

//         <div className="bg-white/15 mx-auto backdrop-blur-2xl border border-white/60 rounded-xl md:rounded-2xl max-w-xl md:max-w-4xl px-5 pt-10">
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <Typography className="!text-2xl md:!text-3xl text-blue-600">
//               Personal Information
//             </Typography>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
//               <TextField
//                 variant="outlined"
//                 label="First Name *"
//                 id="first_name"
//                 sx={whiteField}
//                 error={!!errors.firstname}
//                 helperText={errors.firstname?.message || ""}
//                 {...register("firstname")}
//               />
//               <TextField
//                 variant="outlined"
//                 label="Last Name *"
//                 id="last_name"
//                 sx={whiteField}
//                 error={!!errors.lastname}
//                 helperText={errors.lastname?.message || ""}
//                 {...register("lastname")}
//               />
//               <TextField
//                 variant="outlined"
//                 label="Email *"
//                 id="email"
//                 sx={whiteField}
//                 error={!!errors.email}
//                 helperText={errors.email?.message || ""}
//                 {...register("email")}
//               />
//               <TextField
//                 variant="outlined"
//                 label="Phone *"
//                 id="phone"
//                 sx={whiteField}
//                 error={!!errors.phone}
//                 helperText={errors.phone?.message || ""}
//                 {...register("phone")}
//               />
//             </div>

//             <Typography className="text-blue-600 !text-2xl md:!text-3xl !mb-5">
//               Position Information
//             </Typography>

//             <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
//               {/* Position Select */}
//               <Controller
//                 name="position"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl sx={whiteField} error={!!errors.position}>
//                     <InputLabel id="position-label">
//                       Position Applied For *
//                     </InputLabel>
//                     <Select
//                       labelId="position-label"
//                       label="Position Applied For *"
//                       {...field}
//                     >
//                       <MenuItem value="">
//                         <em>Select</em>
//                       </MenuItem>
//                       <MenuItem value="Senior Digital Marketing Strategist">
//                         Senior Digital Marketing Strategist
//                       </MenuItem>
//                       <MenuItem value="Digital Marketing Manager">
//                         Digital Marketing Manager
//                       </MenuItem>
//                       <MenuItem value="Marketing Coordinator">
//                         Marketing Coordinator
//                       </MenuItem>
//                       <MenuItem value="Full Stack Developer">
//                         Full Stack Developer
//                       </MenuItem>
//                       <MenuItem value="Frontend Developer">
//                         Frontend Developer
//                       </MenuItem>
//                       <MenuItem value="Backend Developer">
//                         Backend Developer
//                       </MenuItem>
//                       <MenuItem value="React Developer">
//                         React Developer
//                       </MenuItem>
//                       <MenuItem value="Nextjs Developer">
//                         Nextjs Developer
//                       </MenuItem>
//                       <MenuItem value="Others (Please specific cover letter)">
//                         Others (Please specific cover letter)
//                       </MenuItem>
//                     </Select>
//                     {errors.position && (
//                       <Typography
//                         variant="caption"
//                         color="error"
//                         sx={{ mt: 0.5 }}
//                       >
//                         {errors.position.message}
//                       </Typography>
//                     )}
//                   </FormControl>
//                 )}
//               />

//               <TextField
//                 id="experience"
//                 label="Years of Experience *"
//                 variant="outlined"
//                 sx={whiteField}
//                 type="number"
//                 error={!!errors.experience}
//                 helperText={errors.experience?.message || ""}
//                 {...register("experience")}
//               />
//             </div>

//             {/* Resume & Cover Letter */}
//             <div className="my-10">
//               <Typography className="text-blue-600 !text-2xl md:!text-3xl !mb-5">
//                 Resume & Cover Letter
//               </Typography>

//               <div className="w-full mx-auto mb-3">
//                 <Typography className="!text-gray-200 !mb-2">
//                   Resume (PDF, DOC, DOCX) *
//                 </Typography>

//                 <Controller
//                   name="resume"
//                   control={control}
//                   render={({ field: { onChange, value, ...field } }) => (
//                     <>
//                       <Button
//                         component="label"
//                         variant="contained"
//                         tabIndex={-1}
//                         startIcon={<CloudUpload />}
//                       >
//                         Upload files
//                         <VisuallyHiddenInput
//                           type="file"
//                           multiple
//                           onChange={(event) => {
//                             onChange(event.target.files);
//                           }}
//                           {...field}
//                         />
//                       </Button>
//                       {errors.resume && (
//                         <Typography
//                           variant="caption"
//                           color="error"
//                           sx={{ display: "block", mt: 1 }}
//                         >
//                           {errors.resume.message}
//                         </Typography>
//                       )}
//                     </>
//                   )}
//                 />
//               </div>

//               <div className="w-full mx-auto">
//                 <Typography className="!text-gray-200 !mb-2">
//                   Cover Letter
//                 </Typography>
//                 <TextareaAutosize
//                   minRows={5}
//                   aria-label="cover-letter"
//                   placeholder="Tell us why you're interested in joining our team..."
//                   className="
//                     w-full
//                     p-4
//                     rounded-xl
//                     border border-gray-300
//                     text-white
//                     bg-transparent
//                     outline-none
//                     placeholder:text-gray-300
//                     focus:border-[#00eaff]
//                     focus:shadow-[0_0_10px_#00eaff55]
//                   "
//                   {...register("coverletter")}
//                 />
//                 {errors.coverletter && (
//                   <Typography
//                     variant="caption"
//                     color="error"
//                     sx={{ display: "block", mt: 1 }}
//                   >
//                     {errors.coverletter.message}
//                   </Typography>
//                 )}
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="my-10">
//               <Typography className="text-blue-600 !text-2xl md:!text-3xl !mb-5">
//                 Additional Information
//               </Typography>

//               <h6 className="text-lg text-slate-300 mb-2">
//                 Portfolio URL (if applicable)
//               </h6>
//               <TextField
//                 sx={whiteField}
//                 variant="outlined"
//                 placeholder="https://"
//                 fullWidth
//                 className="!mb-5"
//                 error={!!errors.portfolioUrl}
//                 helperText={errors.portfolioUrl?.message || ""}
//                 {...register("portfolioUrl")}
//               />

//               {/* About us */}
//               <Controller
//                 name="aboutus"
//                 control={control}
//                 render={({ field }) => (
//                   <FormControl
//                     sx={whiteField}
//                     fullWidth
//                     error={!!errors.aboutus}
//                   >
//                     <InputLabel id="aboutus-label">
//                       How did you hear about us?
//                     </InputLabel>
//                     <Select
//                       labelId="aboutus-label"
//                       label="How did you hear about us?"
//                       {...field}
//                     >
//                       <MenuItem value="">
//                         <em>Select</em>
//                       </MenuItem>
//                       <MenuItem value="LinkedIn">LinkedIn</MenuItem>
//                       <MenuItem value="Job Board">Job Board</MenuItem>
//                       <MenuItem value="Referral">Referral</MenuItem>
//                       <MenuItem value="Social Media">Social Media</MenuItem>
//                       <MenuItem value="Company Website">
//                         Company Website
//                       </MenuItem>
//                       <MenuItem value="Others">Others</MenuItem>
//                     </Select>
//                     {errors.aboutus && (
//                       <Typography
//                         variant="caption"
//                         color="error"
//                         sx={{ mt: 0.5 }}
//                       >
//                         {errors.aboutus.message}
//                       </Typography>
//                     )}
//                   </FormControl>
//                 )}
//               />

//               <div className="relative w-full flex justify-center items-center mt-12">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting || applySlice.status === "loading"}
//                   className="text-xl md:text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-10 rounded-2xl text-gray-200 cursor-pointer hover:text-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {applySlice.status === "loading"
//                     ? "Submitting..."
//                     : "Submit Application"}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };



import React, { Fragment, useEffect, useRef } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { CloudUpload } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { submitApplication, resetApplyState } from "../redux/applySlice";
import { toast } from "react-hot-toast";

const schema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+()\-\s]{7,20}$/, "Enter a valid phone number")
    .required("Phone is required"),
  position: yup.string().required("Select the position"),
  experience: yup
    .number()
    .typeError("Experience must be a number")
    .required("Experience is required")
    .min(0)
    .max(60),
  coverletter: yup.string().max(3000, "Max 3000 characters"),
  portfolioUrl: yup
    .string()
    .url("Enter a valid URL")
    .nullable()
    .notRequired()
    .transform((v, o) => (o === "" ? null : v)),
  aboutus: yup.string().nullable().notRequired(),
  resume: yup
    .mixed()
    .test(
      "required",
      "Please upload your resume",
      (value) => value && value.length > 0
    ),
});

export const ApplyNow = () => {
  const dispatch = useDispatch();
  const applySlice = useSelector((s) => s.apply);
  const loaderRef = useRef(null);
  const [resumeFiles, setResumeFiles] = React.useState([]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverletter: "",
      portfolioUrl: "",
      aboutus: "",
      resume: undefined, // FIXED
    },
  });

  useEffect(() => {
    if (applySlice.status === "loading") {
      if (!loaderRef.current) {
        loaderRef.current = toast.loading("Submitting your application...", {
          id: "apply-loader",
        });
      }
    }

    if (applySlice.status === "succeeded") {
      toast.success("Application submitted successfully!", {
        id: "apply-loader",
      });
      loaderRef.current = null;
      reset();
      dispatch(resetApplyState());
    }

    if (applySlice.status === "failed") {
      toast.error(applySlice.error || "Submit failed", {
        id: "apply-loader",
      });
      loaderRef.current = null;
      dispatch(resetApplyState());
    }
  }, [applySlice.status, applySlice.error, dispatch, reset]);

  const onSubmit = (data) => {
    const fd = new FormData();

    fd.append("firstname", data.firstname);
    fd.append("lastname", data.lastname);
    fd.append("email", data.email);
    fd.append("phone", data.phone);
    fd.append("position", data.position);
    fd.append("experience", data.experience);
    fd.append("coverletter", data.coverletter || "");
    fd.append("portfolioUrl", data.portfolioUrl || "");
    fd.append("aboutus", data.aboutus || "");

    const files = data.resume instanceof FileList ? data.resume : [];
    for (let i = 0; i < files.length; i++) {
      fd.append("resume", files[i]);
    }

    dispatch(submitApplication(fd));
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const whiteField = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "5px",
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.5)",
      },
      "&:hover fieldset": {
        borderColor: "#ffffff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00eaff",
        boxShadow: "0 0 10px #00eaff55",
      },
    },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00eaff" },
  };

  return (
    <Fragment>
      <div className="mx-auto bg-black py-10 px-3">
        <div className="bg-gradient-to-br from-[#000000] via-[#581C87] to-[#000000] py-30 text-center mb-10">
          <h1 className="text-3xl md:text-7xl text-blue-600 mb-3 md:mb-5">
            Apply Now
          </h1>
          <h5 className="text-lg md:text-xl text-slate-300">
            Take the first step towards an exciting career with us
          </h5>
        </div>

        <div className="bg-white/15 mx-auto backdrop-blur-2xl border border-white/60 rounded-xl md:rounded-2xl max-w-xl md:max-w-4xl px-5 pt-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography className="!text-2xl md:!text-3xl text-blue-600">
              Personal Information
            </Typography>

            {/* Personal Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
              <TextField
                label="First Name *"
                sx={whiteField}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
                {...register("firstname")}
              />

              <TextField
                label="Last Name *"
                sx={whiteField}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
                {...register("lastname")}
              />

              <TextField
                label="Email *"
                sx={whiteField}
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />

              <TextField
                label="Phone *"
                sx={whiteField}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            {/* Position Info */}
            <Typography className="text-blue-600 !text-2xl md:!text-3xl !mb-5">
              Position Information
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <FormControl sx={whiteField} error={!!errors.position}>
                    <InputLabel>Position Applied For *</InputLabel>
                    <Select {...field} value={field.value || ""}>
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value="Senior Digital Marketing Strategist">
                        Senior Digital Marketing Strategist
                      </MenuItem>
                      <MenuItem value="Digital Marketing Manager">
                        Digital Marketing Manager
                      </MenuItem>
                      <MenuItem value="Marketing Coordinator">
                        Marketing Coordinator
                      </MenuItem>
                      <MenuItem value="Full Stack Developer">
                        Full Stack Developer
                      </MenuItem>
                      <MenuItem value="Frontend Developer">
                        Frontend Developer
                      </MenuItem>
                      <MenuItem value="Backend Developer">
                        Backend Developer
                      </MenuItem>
                      <MenuItem value="React Developer">
                        React Developer
                      </MenuItem>
                      <MenuItem value="Nextjs Developer">
                        Nextjs Developer
                      </MenuItem>
                      <MenuItem value="Others (Please specific cover letter)">
                        Others
                      </MenuItem>
                    </Select>
                    {errors.position && (
                      <Typography variant="caption" color="error">
                        {errors.position.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />

              <TextField
                label="Years of Experience *"
                type="number"
                sx={whiteField}
                error={!!errors.experience}
                helperText={errors.experience?.message}
                {...register("experience")}
              />
            </div>

            {/* Resume + Cover Letter */}
            <Typography className="text-blue-600 !text-2xl md:!text-3xl !mb-5">
              Resume & Cover Letter
            </Typography>

            <Controller
              name="resume"
              control={control}
              render={({ field: { onChange } }) => (
                <>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUpload />}
                  >
                    Upload Resume
                    <VisuallyHiddenInput
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        setResumeFiles(files); // show preview
                        onChange(e.target.files); // send to react-hook-form
                      }}
                    />
                  </Button>

                  {errors.resume && (
                    <Typography variant="caption" color="error">
                      {errors.resume.message}
                    </Typography>
                  )}

                  {/* FILE PREVIEW */}
                  {resumeFiles.length > 0 && (
                    <div className="mt-3 text-gray-300">
                      <h4 className="mb-2 font-semibold">Selected Files:</h4>
                      <ul className="list-disc pl-6">
                        {resumeFiles.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            />

            <Typography className="!text-gray-200 !mt-4">
              Cover Letter
            </Typography>
            <TextareaAutosize
              minRows={5}
              placeholder="Tell us why you're interested..."
              className="w-full p-4 rounded-xl border border-gray-300 text-white bg-transparent"
              {...register("coverletter")}
            />
            {errors.coverletter && (
              <Typography variant="caption" color="error">
                {errors.coverletter.message}
              </Typography>
            )}

            {/* Additional Info */}
            <Typography className="text-blue-600 !text-2xl md:!text-3xl !mt-10 !mb-5">
              Additional Information
            </Typography>

            <TextField
              placeholder="https://"
              sx={whiteField}
              fullWidth
              error={!!errors.portfolioUrl}
              helperText={errors.portfolioUrl?.message}
              {...register("portfolioUrl")}
            />

            <div className="my-6">
              <Controller
                name="aboutus"
                control={control}
                render={({ field }) => (
                  <FormControl sx={whiteField} fullWidth>
                    <InputLabel>How did you hear about us?</InputLabel>
                    <Select {...field} value={field.value || ""}>
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                      <MenuItem value="Job Board">Job Board</MenuItem>
                      <MenuItem value="Referral">Referral</MenuItem>
                      <MenuItem value="Social Media">Social Media</MenuItem>
                      <MenuItem value="Company Website">
                        Company Website
                      </MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </div>

            <div className="flex justify-center mt-12 mb-5">
              <button
                type="submit"
                className="text-xl md:text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-10 rounded-2xl text-gray-200 hover:text-white cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
