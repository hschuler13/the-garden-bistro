export default function Page() {
  return (
    <>
            <img src="/theGardenBistroLogo.svg"></img>


            <div className="flex flex-col md:flex-row gap-5 items-center max-w-6xl mx-auto p-6">
                <div className="w-full md:w-1/2">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-lg shadow-lg"
                    >
                        <source src="/bistro-video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="text-alt w-full md:w-1/2 space-y-4">
                    <div className=" prose">
                        <p className="text-lg">
                            Welcome to The Garden Bistro, where each plate is a canvas painted with locally sourced
                            ingredients.
                            We're more than just a restaurant – we're storytellers through food, transforming fresh
                            harvests from
                            neighboring farms into culinary masterpieces.
                            Our passion lies in creating experiences that connect you to our land and community.
                            Join us in our cozy space where every season brings new flavors to our tables, and every
                            meal tells a
                            story of sustainable dining.
                        </p>
                    </div>
                    <div className="text-xl font-semibold italic">
                        - Head Chef Asari
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Professional Review */}
                    <div className="flex-1 bg-footerBG rounded-lg shadow-md p-6">
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <p className="text-black font-semibold">By Felipe Fronchetti</p>
                                <p className="text-black text-sm">Senior Food Critic, The Metropolitan Gazette</p>
                                <p className="text-black text-sm">Published: January 18, 2025</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-black">
                                    In an era where 'farm-to-table' has become a buzzword, The Garden Bistro transforms
                                    this concept into an
                                    art form. Nestled in the heart of the city, this gem delivers more than just a meal
                                    – it orchestrates a narrative
                                    of sustainability and culinary excellence.
                                </p>
                                <p className="text-black">
                                    Chef Asari's winter tasting menu is a masterclass in seasonal cooking.
                                    What sets The Garden Bistro apart isn't just its impeccable sourcing – it's the
                                    kitchen's ability to let
                                    these premium ingredients sing without overwhelming them.
                                    Each dish demonstrates restraint and respect for its components, a rare quality in
                                    today's dining
                                    landscape.
                                </p>
                            </div>

                            <div className="text-black space-y-2 pt-4 border-t">
                                <p><span className="font-semibold">Price:</span> $$</p>
                                <p><span className="font-semibold">Must-try:</span> Roasted Beet Salad with Goat Cheese
                                    and Balsamic Glaze, Pan-Seared Salmon with Quinoa and Citrus Vinaigrette, and
                                    Flourless Chocolate Torte</p>
                                <p><span className="font-semibold">Noise Level:</span> Moderate</p>
                                <p><span className="font-semibold">Recommended for:</span> Special occasions,
                                    sustainable dining enthusiasts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <div className="flex-1 space-y-6">
                        {/* First Customer Review */}
                        <div className="bg-footerBG rounded-lg shadow-md p-6">
                            <p className="text-gray-800 mb-4">
                                "The Garden Bistro has lovely outdoor setting and great environment. The Lemon Poppy
                                Seed Cake with
                                Raspberry Compote was rich and flavorful. A bit of a wait on weekends, but worth it!"
                            </p>
                            <p className="text-gray-600 italic">
                                - Review by Isabella Amore who has spent her last 12 anniversary dinners at the Garden
                                Bistro
                            </p>
                        </div>

                        {/* Second Customer Review */}
                        <div className="bg-footerBG rounded-lg shadow-md p-6">
                            <p className="text-gray-800 mb-4">
                                "The Garden Bistro is a peaceful family-owned bistro with a beautiful garden vibe. The
                                Pan-Seared Salmon
                                with Quinoa and Citrus Vinaigrette was fresh and perfectly cooked. A great place to
                                enjoy a relaxing,
                                quality meal!"
                            </p>
                            <p className="text-gray-600 italic">
                                - Reviewed by Romeo Lorenzo, customer of 7 years
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}
