import lg from "../../src/assets/Images/test.png"

export function NavBar(){
    /*Functions to control the navigation of the NavBar */
    return(
        <div className="fixed top-0 p-4 w-screen flex flex-row justify-between items-center bg-transparent z-50">
            
            <div>
                <img src={lg} alt="logo" className="w-10"/>
            </div>

            <div>
                <ul className="hidden md:flex flex-row justify-evenly gap-5 text-xl font-light">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Services</li>
                </ul>
            </div>

            <div className="hidden md:block">
                <button className="bg-black text-white px-6 py-3 rounded-xl ">Contact</button>
            </div> 

            <div className="block md:hidden">
                <button className="text-3xl">☰</button>
            </div>

        </div>
    )
}