import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Footer(){

    return(

        <>
        
        <footer className="bg-emerald-700 text-amber-100 py-10 mt-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            
            
            <div className="text-center md:text-left w-full md:w-1/3 pr-10">
            <img src="./logo.jpg" className="h-25 rounded-3xl" alt="" />
                <h2 className="text-2xl font-bold text-amber-100">Speak Smart</h2>
                <p className="mt-2 text-amber-50">Will Add Description In Future</p>
            </div>
            
         
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-3">
                <h3 className="text-lg font-semibold text-amber-100">Quick Links</h3>
                <a href="#about" className="hover:text-amber-200 transition duration-300">About</a>
                <a href="#skills" className="hover:text-amber-200 transition duration-300">Skills</a>
                <a href="#activities" className="hover:text-amber-200 transition duration-300">Activites</a>
                <a href="#mission" className="hover:text-amber-200 transition duration-300">Mission</a>
            </div>
            
           
            <div className="w-full md:w-1/3 flex text-2xl justify-center md:justify-end space-x-4">
                <a href="https://www.instagram.com" target="__blank" className="text-amber-100 hover:text-amber-200 transition duration-300 transform hover:scale-110">
                <FaInstagram />

                </a>
                <a href="https://www.facebook.com" target="__blank" className="text-amber-100 hover:text-amber-200 transition duration-300 transform hover:scale-110">
                <AiOutlineFacebook />

                </a>
                <a href="https://www.x.com" target="__blank" className="text-amber-100 hover:text-amber-200 transition duration-300 transform hover:scale-110">
                <FaXTwitter />

                </a>
            </div>
        </div>

        <div className="text-center text-amber-100 text-sm mt-8">
            &copy; 2025 Speak Smart. All rights reserved.
        </div>
    </footer>

        </>
    )

}

export default Footer