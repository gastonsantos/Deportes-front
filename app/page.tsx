"use client"
import Imagenes from "@/components/landing/imagenes";
import Stepper from "@/components/landing/steppers";
import SteppersLoging from "@/components/landing/pruebaSteppersLogin";
import InfoLanding from "@/components/landing/infoLanding";
import Footer from "@/components/landing/footer";
export default function Home() {
    return (

        <div className="w-full flex min-h-screen flex-col items-center justify-center ">
            {/*Aqui agregaria la landing*/}

            <Imagenes/>
            <SteppersLoging/>
            <InfoLanding/>  
            <Stepper />
            <Footer/>


        </div>
    );
}
