import SignUpForm from "@/components/SignupForm";
export default function SignupPage() {
  return (
    <div className="pt-32 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}
