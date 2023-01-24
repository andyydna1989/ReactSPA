

const TextSection = () => {

    return (
        <section>

        <div className="flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left"> Why use Andy's Tennis Store?</h2>
                <p className="max-w-sm text-center text-gray-400 md:text-left"> Here's just some of the reasons you'll love shopping for your next tennis purchase with us...</p>
            </div>
            <div className="flex flex-col space-y-8 md:w:1/2">

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <h2 className="rounded-l-full bg-red-400 md:bg-transparent">
                    </h2>
                    <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white bg-black rounded-full md:py-1 md:bg-red-500">1:
                        <h3 className="text-base inline min-w-full font-bold md:mb-4 md:hidden"> The biggest discounts on RRP.</h3>
                        
                        </div>
                        <div className="hidden mb-4 text-lg font-bold md:block">
                        The biggest discounts on RRP.
                        <p className="text-gray-400 font-normal">
                            We've got a great relationship with our suppliers, and because we have ongoing bulk-buy agreements they permit us to discount below the normal manufacturer minimum sale price.
                        </p>
                        </div>
                    </div>
                    
                </div>

{/*second section*/}
<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <h2 className="rounded-l-full bg-red-400 md:bg-transparent">
                    </h2>
                    <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white bg-black rounded-full md:py-1 md:bg-red-500"> 2:
                        <h3 className="text-base inline font-bold md:mb-4 md:hidden"> Stockist of legacy kit you won't find elsewhere.</h3>
                        
                        </div>
                        <div className="hidden mb-4 text-lg font-bold md:block">
                        Stockist of legacy kit you won't find elsewhere.
                        <p className="text-gray-400 font-normal">
                            We seek out the most popular rackets from years gone by, so if you need to replace your favourite old Pro Staff or DNX10, we've got you covered.
                        </p>
                        </div>
                    </div>
                    
                </div>

 {/*3rd section*/}

                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <h2 className="rounded-l-full bg-red-400 md:bg-transparent">
                    </h2>
                    <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white bg-black rounded-full md:py-1 md:bg-red-500"> 3:
                        <h3 className="text-base inline font-bold md:mb-4 md:hidden"> Our website is awesome.</h3>
                        
                        </div>
                        <div className="hidden mb-4 text-lg font-bold md:block">
                        Our website is awesome.
                        <p className="text-gray-400 font-normal">
                            Yeh, that's right. This site is built with React, TailwindCSS, Express and Node.JS. It's a delightful example of all 4 working in beautiful unison!
                        </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
<p className="text-gray-400 text-center">_____________________________________</p>
        </section>
    )
};

export default TextSection;