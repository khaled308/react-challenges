import { Button } from "./Components"

function Footer() {
    return (
        <footer className="bg-veryDarkBlue text-white py-5">
            <div className="flex-col-reverse md:flex-row container mx-auto flex justify-between px-6 items-center gap-8 md:items-start">
                <div className="flex flex-col justify-between h-[150px] flex-1 items-start gap-4">
                    <img src="images/logo.svg" alt=""/>
                    <div className="flex gap-2">
                        <img src="images/icon-facebook.svg" alt="facebook" />
                        <img src="images/icon-instagram.svg" alt="instagram" />
                        <img src="images/icon-pinterest.svg" alt="pinterest" />
                        <img src="images/icon-twitter.svg" alt="twitter" />
                        <img src="images/icon-youtube.svg" alt="" />
                    </div>
                </div>
                <ul className="flex justify-between h-[150px] flex-1 flex-wrap text-center">
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Home</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Pricing</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Product</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">About Us</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Careers</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Community</li>
                    <li className="cursor-pointer hover:text-darkGrayishBlue w-1/2">Privacy Policy</li>
                </ul>
                <div className="flex gap-2 text-black h-[150px] flex-1 items-start justify-end">
                    <input type="text" className="rounded-full p-2 outline-none"/>
                    <Button txt='GO' />
                </div>
            </div>
        </footer>
    )
}

export default Footer