"use client"

import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(dbFirebase, 'users/' + user.uid), {
          fullName: fullName
        }).then(() => {
          router.push("/");
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="mt-[60px] mx-auto w-[500px]">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="" onSubmit={handleRegister}>
          <FormInput
            label="Họ Tên"
            id="fullname"
            name="fullname"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
          <FormInput
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Mật khẩu"
            type="password"
            id="password"
            name="password"
            required={true}
          />
          <FormButton text="Đăng Ký" />
        </form>
      </div>
    </>
  );
}
