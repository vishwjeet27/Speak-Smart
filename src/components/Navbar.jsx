function Navbar(){

    return(

        <>

        <nav className="bg-emerald-700 flex flex-wrap h-16 items-center justify-around">

            <div className="text-3xl flex font-bold justify-between gap-2 text-amber-100 items-center">
                <img src="./logo.jpg" className="h-12 rounded-xl" alt="" />
                <h1>Speak Smart</h1></div>

            <div className="text-2xl text-amber-100 flex gap-7">
                <a className="hover:text-amber-200" href="#about">About</a>
                <a className="hover:text-amber-200" href="#skills">Skills</a>
                <a className="hover:text-amber-200" href="#activities">Activities</a>
                <a className="hover:text-amber-200" href="#mission">Mission</a>
                <a className="hover:text-amber-200" href="#contact">Contact</a>
            </div>

            <div>
                <a className="hover:bg-amber-200 bg-amber-100 p-2 rounded-xl text-emerald-800 font-bold" href="#">Join Now!</a>
            </div>


        </nav>

        </>

    )
}

export default Navbar