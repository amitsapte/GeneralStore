

const UserLogin = () => {


    return (

        <div className="relative h-auto">
            {/* Full-screen SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"  // Stretch without preserving aspect ratio
            >
                {/* Rectangle filling the entire SVG */}
                <rect x="0" y="0" width="100 " height="100" fill="black" />

                {/* draing a circle */}
                <circle cx="20" cy="20" r=".3" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M0,0 q60,100 100,0 q60,-20 100,0"
                        begin="0s"
                        dur="3s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r=".5" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M20,0 q90,290 0,0 "
                        begin="0s"
                        dur="5s"
                        opticity="0.4"
                        repeatCount="indefinite" />
                </circle>

                <circle cx="20" cy="20" r=".3" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M100,0 q-60,-100 -100,0 q60,-20 100,0"
                        begin="0s"
                        dur="3s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r=".5" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M80,0 q-30,90 -60,10 q0,0 0,0"
                        begin="0s"
                        dur="5s"
                        opticity="0.9"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="5" cy="5" r=".2" fill="white">

                    <animateMotion
                        path="M15,0 q60,100 100,0 q60,-20 100,0"
                        begin="2s"
                        dur="3s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="5" cy="5" r=".3" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M50,0 q0,100 0,0 q60,-20 100,0"
                        begin="0s"
                        dur="5s"
                        opticity="0.4"
                        repeatCount="indefinite" />
                </circle>

                <circle cx="0" cy="0" r=".5" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M80,0 q-20,90 -60,10 q0,0 0,0"
                        begin="0s"
                        dur="5s"
                        opticity="0.9"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r=".5" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M80,0 q-10,90 -60,10 q0,0 0,0"
                        begin="0s"
                        dur="5s"
                        opticity="0.9"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r=".5" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M80,0 q-40,90 -60,10 q0,0 0,0 "
                        begin="0s"
                        dur="5s"
                        opticity="0.9"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="5" cy="5" r=".1" fill="white">

                    <animateMotion
                        path="M0,0 q60,100 100,0 q60,-20 100,0"
                        begin="2s"
                        dur="7s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="20" r=".6" fill="white" troke="black" strokeWidth="1">

                    <animateMotion
                        path="M50,0 q0,100 0,0 q60,-20 100,0"
                        begin="0s"
                        dur="6s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="5" cy="5" r=".3" fill="white">

                    <animateMotion
                        path="M10,0 q60,100 100,0 q60,-20 100,0"
                        begin="2s"
                        dur="7s"
                        opticity="0.8"
                        repeatCount="indefinite" />
                </circle>

            </svg>

            {/* Login Form */}
            <div className="flex justify-center items-center  z-10">
                <div className="flex flex-col space-y-6 items-center rounded-md h-[400px] mt-10  w-[350px] bg-#A4A8A3 border border-gray-50 p-4 opacity-90">
                    <div className="flex flex-col w-full mt-[50px] space-y-1">
                        <label className="text-[#ffffff] text-[20px]">Email</label>
                        <input className="border  border-white h-[40px]" type="email" />
                    </div>
                    <div className="flex flex-col w-full space-y-1">
                        <label className="text-[#ffffff] text-[20px]">Password</label>
                        <input className="border border-white h-[40px]" type="password" />
                    </div>
                    <div className="flex flex-row w-full mt-2">
                        <button className="rounded-sm text-[25px] h-[40px] w-full bg-blue-500">Sign in</button>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default UserLogin;