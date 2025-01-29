import Image from 'next/image'

export default function Menu() {
    return (
        <div className="max-w-6xl text-alt mx-auto p-6">
            {/* Menu Title */}
            <h1 className="text-3xl font-bold text-center  mb-8">Menu</h1>

            {/* Starters Section */}
            <section className="mb-12 border-footerBG">
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Starters</h2>

                {/* Menu Item */}
                <div className="flex flex-col gap-8">
                    {/* Beet Salad */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Roasted Beet Salad with Goat Cheese and Balsamic Glaze</h3>
                            <span className="text-lg font-semibold">$12.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Hand-roasted golden and red beets nestled on a bed of baby arugula,
                                topped with creamy local goat cheese and candied walnuts.
                                Finished with a drizzle of house-made balsamic reduction and extra virgin olive oil.
                                A perfect harmony of earthy, sweet, and tangy flavors.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/roasted-beet-salad.jpg"
                                    alt="Roasted Beet Salad"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tomato Soup */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Heirloom Tomato Soup with Basil Pesto</h3>
                            <span className="text-lg font-semibold">$9.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Velvety soup crafted from locally sourced heirloom tomatoes, slow-simmered with sweet onions and fresh herbs.
                                Crowned with a dollop of house-made basil pesto and served with rustic garlic crostini.
                                A comforting blend of garden-fresh flavors in every spoonful.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/Roasted_Tomato_Pesto_Soup_3.jpg"
                                    alt="Heirloom Tomato Soup"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Entrees Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Entrees</h2>

                <div className="flex flex-col gap-8">
                    {/* Salmon */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Pan-Seared Salmon with Quinoa and Citrus Vinaigrette</h3>
                            <span className="text-lg font-semibold">$24.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Wild-caught salmon, pan-seared to golden perfection, served atop a bed of fluffy herb-infused quinoa.
                                Finished with a bright citrus vinaigrette, fresh microgreens, and delicate orange segments.
                                A light yet satisfying dish that celebrates clean, vibrant flavors.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/pan_.jpg"
                                    alt="Pan-Seared Salmon"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mushroom Burger */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Grilled Portobello Mushroom Burger</h3>
                            <span className="text-lg font-semibold">$18.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                A hearty, marinated portobello mushroom cap grilled to perfection, topped with creamy avocado spread,
                                peppery arugula, and roasted red peppers. Served on a toasted artisan brioche bun with house-made garlic aioli.
                                A satisfying vegetarian option that even meat-lovers crave.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/Grilled_Portobello_Mushroom_Burger.jpg"
                                    alt="Portobello Mushroom Burger"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Desserts Section */}
            <section className="mb-12 border-footerBG">
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Dessert</h2>

                <div className="flex flex-col gap-8">
                    {/* cake */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Lemon Poppy Seed Cake with Raspberry Compote</h3>
                            <span className="text-lg font-semibold">$10.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                House-baked lemon cake studded with poppy seeds, delicately flavored with fresh lemon zest and pure vanilla.
                                Served warm with a bright raspberry compote and dollop of whipped mascarpone cream.
                                A perfect balance of sweet, tart, and light flavors in every bite.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/Lemon_Poppy_seed_torte.jpg"
                                    alt="lemon poppy"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* chocolate */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Flourless Chocolate Torte</h3>
                            <span className="text-lg font-semibold">$11.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Rich, decadent flourless chocolate torte made with premium dark chocolate and French butter.
                                Topped with a cloud of fresh whipped cream, chocolate shavings, and a light dusting of cocoa powder.
                                Gloriously fudgy center with a delicate crackled top - pure chocolate indulgence.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/low_carb_keto_flourless_chocolate_torte.jpg"
                                    alt="chocolate"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Beverages Section */}
            <section className="mb-12 border-footerBG">
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Beverages</h2>

                <div className="flex flex-col gap-8">
                    {/* Tea */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Housemade Iced Lavender Tea</h3>
                            <span className="text-lg font-semibold">$5.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Delicately steeped organic lavender blossoms and premium black tea,
                                lightly sweetened with local honey and served over ice with a fresh lavender sprig.
                                A refreshing and elegant drink that captures the essence of our garden.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/Iced_Lavender_Latte.jpg"
                                    alt="Tea"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Beer */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Craft Local Beers</h3>
                            <span className="text-lg font-semibold">$8.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Rotating selection of craft beers from local breweries, celebrating the best of Willowbrook's artisanal brewing scene.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/breweries_beer.jpg"
                                    alt="Beer"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Wine */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Organic Wines</h3>
                            <span className="text-lg font-semibold">$10.00</span>
                        </div>
                        <div className="flex gap-32">
                            <p className="flex-1 text-footerBG">
                                Thoughtfully curated selection of organic and biodynamic wines from sustainable vineyards.
                                From crisp whites to robust reds, our wine list celebrates artisanal winemakers committed to environmental stewardship.
                            </p>
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/wine.jpg"
                                    alt="Wine"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}