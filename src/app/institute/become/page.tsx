"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { createInstitute } from "@/lib/store/institute/instituteSlice";
import { IInstitute } from "@/lib/store/institute/instituteSlice.type";
import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Status } from "@/lib/types/type";

// --- Main Component ---
export default function BecomeInstitute() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { status } = useAppSelector((store) => store.institute);

  const [instituteData, setInstituteData] = useState<IInstitute>({
    instituteAddress: "",
    instituteEmail: "",
    instituteName: "",
    institutePhoneNumber: "",
    institutePanNumber: "",
    instituteVatNumber: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInstituteData({ ...instituteData, [name]: value });
  };

  const handleInstituteCreateSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createInstitute(instituteData));
  };

  // --- Effect to handle redirect on successful creation ---
  useEffect(() => {
    if (status === Status.SUCCESS) {
      // Optional: reset the form
      setInstituteData({
        instituteAddress: "",
        instituteEmail: "",
        instituteName: "",
        institutePhoneNumber: "",
        institutePanNumber: "",
        instituteVatNumber: "",
      });

      // Redirect to dashboard after success
      router.push("/institute/dashboard");
    }
  }, [status, router]);

  return (
    <div className="relative min-h-screen font-[Poppins] bg-[#f8fafc] overflow-x-hidden">
      {/* Header */}
      <div className="text-center pt-5 pb-8 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Become an Institute</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Manage your students and teachers independently, track performance, and grow digitally.
        </p>
      </div>

      {/* Section container */}
      <div
        ref={sectionRef}
        className="relative flex flex-col md:flex-row justify-center items-start px-4 md:px-16 gap-[10%] pb-16"
      >
        {/* Sticky Left Form Column */}
        <div className="w-full md:w-[40%] mb-10 md:mb-0">
          <div className="sticky top-[80px]" style={{ alignSelf: "start" }}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-[#4f46e5] mb-4">Create Your Account</h2>
              <form onSubmit={handleInstituteCreateSubmission} className="space-y-4">
                <InputField placeholder="Institute Name" name="instituteName" onChange={handleChange} />
                <InputField placeholder="Phone Number" name="institutePhoneNumber" onChange={handleChange} />
                <InputField placeholder="Email" type="email" name="instituteEmail" onChange={handleChange} />
                <InputField placeholder="Address" name="instituteAddress" onChange={handleChange} />
                <InputField placeholder="PAN Number" name="institutePanNumber" onChange={handleChange} />
                <InputField placeholder="VAT Number" name="instituteVatNumber" onChange={handleChange} />

                <button
                  type="submit"
                  disabled={status === Status.LOADING}
                  className={`w-full py-3 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 
                    ${status === Status.LOADING 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-gradient-to-r from-[#4f46e5] to-[#10b981] hover:from-[#4f46e5]/90 hover:to-[#10b981]/90"}`}
                >
                  {status === Status.LOADING ? "Creating..." : "Create"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Features Column */}
        <div className="w-full md:w-[40%]">
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#10b981]/30">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #4f46e5, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

// --- Helper Components ---
interface InputProps {
  placeholder: string;
  name: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ placeholder, name, type = "text", onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/30 transition"
      required
    />
  );
}

const features = [
  { title: "Manage Students", desc: "Easily manage student records and progress.", icon: "👩‍🎓" },
  { title: "Manage Teachers", desc: "Organize your teachers and courses efficiently.", icon: "👨‍🏫" },
  { title: "Analytics & Reports", desc: "Track performance with detailed reports.", icon: "📊" },
  { title: "Secure & Reliable", desc: "Your data is safe and always accessible.", icon: "🔒" },
  { title: "Extra Feature 1", desc: "Additional feature to extend scroll.", icon: "✨" },
  { title: "Extra Feature 2", desc: "Additional feature to extend scroll.", icon: "🚀" },
  { title: "Extra Feature 3", desc: "Additional feature to extend scroll.", icon: "💡" },
  { title: "Extra Feature 4", desc: "Additional feature to extend scroll.", icon: "📚" },
];
