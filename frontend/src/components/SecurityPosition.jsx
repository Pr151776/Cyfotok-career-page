import React, { Fragment } from "react";
import { SecurityPerks } from "./SecurityPerks";
import { Link } from "react-router-dom";

export const SecurityPosition = () => {
  return (
    <Fragment>
      <div className="px-5 md:px-10 py-16 bg-gradient-to-br from-[#EF4444] via-[#581C87] to-[#000000] transition-all duration-300">
        <div>
          <h1 className="text-4xl text-center text-gray-50 py-10">
            Security Position
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-20 mx-auto">
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Senior Cybersecurity Analyst
                </p>
                <p className="text-lg text-slate-200 pt-2">
                  Security Operations
                </p>
              </div>
              <div>
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Full-time
                </button>
                <p className="pl-3 pt-2 text-slate-200">Remote</p>
              </div>
            </div>
            <div className="mt-5 text-gray-200">
              Lead threat detection and incident response activities. Monitor
              security systems, analyze security events, and coordinate response
              efforts to protect our clients' digital assets.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>5+ years of experience in cybersecurity operations</li>
                <li>Expertise in SIEM tools and threat hunting</li>
                <li>Strong understanding of network security and protocols</li>
                <li>Experience with incident response and forensics</li>
                <li>Certifications: CISSP, CEH, or SANS GIAC preferred</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Penetration Tester
                </p>
                <p className="text-lg text-slate-200 pt-2">Security Testing</p>
              </div>
              <div>
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Full-time
                </button>
                <p className="pl-3 pt-2 text-slate-200">Hybrid</p>
              </div>
            </div>
            <div className="mt-5 text-gray-200">
              Conduct comprehensive security assessments and penetration testing
              for web applications, networks, and infrastructure. Identify
              vulnerabilities and provide remediation guidance.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>5+ years of experience in penetration testing</li>
                <li>
                  Proficiency in tools like Burp Suite, Metasploit, and Nmap
                </li>
                <li>Experience with web application security testings</li>
                <li>
                  Strong knowledge of OWASP Top 10 and security frameworks
                </li>
                <li>Certifications: OSCP, CEH, or similar preferred</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Security Engineer
                </p>
                <p className="text-lg text-slate-200 pt-2">
                  Security Engineering
                </p>
              </div>
              <div>
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Full-time
                </button>
                <p className="pl-3 pt-2 text-slate-200">Remote</p>
              </div>
            </div>
            <div className="mt-5 text-gray-200">
              Design, implement, and maintain security infrastructure and
              controls. Develop security solutions and automation to enhance our
              security posture.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>5+ years of security engineering experience</li>
                <li>Strong knowledge of cloud security (AWS/Azure/GCP)</li>
                <li>Experience with security tools and automation</li>
                <li>Proficiency in Python, PowerShell, or similar scripting</li>
                <li>Understanding of DevSecOps principles</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Cybersecurity Consultant
                </p>
                <p className="text-lg text-slate-200 pt-2">
                  Security Consulting
                </p>
              </div>
              <div>
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Full-time
                </button>
                <p className="pl-3 pt-2 text-slate-200">Hybrid</p>
              </div>
            </div>
            <div className="mt-5 text-gray-200">
              Provide strategic cybersecurity guidance to clients. Conduct risk
              assessments, develop security policies, and help organizations
              improve their security posture.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>5+ years of cybersecurity consulting experience</li>
                <li>
                  Strong understanding of compliance frameworks (ISO 27001,
                  NIST, SOC 2)
                </li>
                <li>Excellent communication and presentation skills</li>
                <li>Experience with risk assessment methodologies</li>
                <li>Certifications: CISSP, CISM, or similar preferred</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Graphic Designer Intern
                </p>
                <p className="text-lg text-slate-200 pt-2">Creative Design</p>
              </div>
              <div className="text-end">
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Intership
                </button>
                <p className="pl-3 pt-2 text-slate-200">Hybrid</p>
                <p className="pl-3 text-blue-500">6 months</p>
              </div>
            </div>
            <p className="text-green-400 text-end">
              ₹8,000 - ₹15,000/month (Performance-based)
            </p>
            <div className="mt-5 text-gray-200">
              Join our creative team as a Graphic Designer Intern and gain
              hands-on experience in digital marketing, social media design, and
              branding. Work on real client projects while developing your
              design skills and building a professional portfolio.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>
                  Currently pursuing or completed degree in Graphic Design,
                  Visual Arts, or related fields
                </li>
                <li>
                  Basic proficiency in Adobe Creative Suite (Photoshop,
                  Illustrator, InDesign)
                </li>
                <li>Creative mindset with strong attention to detail</li>
                <li>
                  Basic understanding of design principles and color theory
                </li>
                <li>
                  Familiarity with social media platforms and digital marketing
                  concepts
                </li>
                <li>
                  Willingness to learn and adapt to new design trends and tools
                </li>
                <li>
                  Portfolio or sample work demonstrating creative abilities
                </li>
                <li>Good communication and teamwork skills</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/50 cursor-pointer">
            <div className="flex justify-between max-w-xl">
              <div>
                <p className="text-2xl text-gray-50 opacity-90">
                  Data Science Intern
                </p>
                <p className="text-lg text-slate-200 pt-2">Data Analytics</p>
              </div>
              <div>
                <button className="px-2 py-1 rounded-full bg-white/15 text-white border border-white/30">
                  Intership
                </button>
                <p className="pl-3 pt-2 text-slate-200">On-site</p>
                <p className="pl-3 text-blue-400">6 months</p>
              </div>
            </div>
            <p className="text-green-400 text-end">₹15,000/month</p>
            <div className="mt-5 text-gray-200">
              Join our data science team to work on real-world projects
              involving data analysis, machine learning, and statistical
              modeling. Gain hands-on experience with cutting-edge data science
              tools and technologies.
            </div>
            <div className="py-5 text-gray-50">
              <h1 className="text-lg">Requirements:</h1>
              <ul className="list-disc pl-4 text-gray-200 opacity-95">
                <li>
                  Currently pursuing B.Tech/B.E. in Computer Science, IT, or
                  related fields
                </li>
                <li>
                  Strong foundation in Python programming and data analysis
                </li>
                <li>
                  Basic understanding of machine learning concepts and
                  algorithms
                </li>
                <li>
                  Familiarity with statistical analysis and data visualization
                </li>
                <li>Knowledge of SQL and database concepts</li>
                <li>
                  Experience with Jupyter Notebook, Pandas, NumPy is a plus
                </li>
                <li>Strong analytical and problem-solving skills</li>
                <li>Excellent communication and teamwork abilities</li>
              </ul>
            </div>
            <div className="flex gap-10">
              <Link
                to="/career/apply"
                className="px-5 py-2 rounded-xl border border-blue-400 cursor-pointer hover:bg-blue-600 text-gray-50"
              >
                Apply Now
              </Link>
              <button className="px-5 py-2 bg-[#05020f] text-gray-100 rounded-xl cursor-pointer">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <SecurityPerks />
    </Fragment>
  );
};
