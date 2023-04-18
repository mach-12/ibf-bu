export default function RegisterButton()
{
    return (
        <div className="flex items-center justify-center py-10">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScJsoE6l08csb0iW5R55ghrb2iCFWPz1te--0Bv5Xj9Cl8_PQ/viewform?usp=sf_link" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white text-3xl">CHECK OUT THE EVENT</span>
                </span>
            </a>
        </div>
    )
}