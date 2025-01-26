import Image from 'next/image'
export default function Menu() {
  return (
<>
<div className="text-md pt-1 font-semibold text-alt">The Menu</div>
<div className="text-md pt-1  text-footerBG"> Starters
    <div>
        <div> Roasted Beet Salad with Goat Cheese and Balsamic Glaze </div>
        <div> 12.00 </div>
    </div>
    <div>
        <p>
            Hand-roasted golden and red beets nestled on a bed of baby arugula,
            topped with creamy local goat cheese and candied walnuts.
            Finished with a drizzle of house-made balsamic reduction and extra virgin olive oil.
            A perfect harmony of earthy, sweet, and tangy flavors.
        </p>
    <Image height={50} width={50} src="/roasted-beet-salad.jpg" alt="tyler my beloved"/>
    </div>
    <div>
        <div> Heirloom Tomato Soup with Basil Pesto </div>
        <div> 9.00 </div>
    </div>
    <div>
        <p>
            Velvety soup crafted from locally sourced heirloom tomatoes, slow-simmered with sweet onions and fresh herbs.
            Crowned with a dollop of house-made basil pesto and served with rustic garlic crostini.
            A comforting blend of garden-fresh flavors in every spoonful.
        </p>
        <Image height={50} width={50} src="/Roasted_Tomato_Pesto_Soup_3.jpg" alt="tyler my beloved"/>
    </div>
</div>


<div className="text-md pt-1  text-footerBG"> Entrees
    <div>
        <div> Pan-Seared Salmon with Quinoa and Citrus Vinaigrette </div>
        <div> 24.00 </div>
    </div>
    <div>
        <p>
            Wild-caught salmon, pan-seared to golden perfection, served atop a bed of fluffy herb-infused quinoa.
            Finished with a bright citrus vinaigrette, fresh microgreens, and delicate orange segments.
            A light yet satisfying dish that celebrates clean, vibrant flavors.
        </p>
        <Image height={50} width={50} src="/pan_.jpg" alt="tyler my beloved"/>
    </div>
    <div>
        <div> Grilled Portobello Mushroom Burger with Avocado and Arugula </div>
        <div> 18.00 </div>
    </div>
    <div>
        <p>
            A hearty, marinated portobello mushroom cap grilled to perfection, topped with creamy avocado spread, peppery arugula,
            and roasted red peppers. Served on a toasted artisan brioche bun with house-made garlic aioli.
            A satisfying vegetarian option that even meat-lovers crave.
        </p>
        <Image height={50} width={50} src="/Grilled_Portobello_Mushroom_Burger.jpg" alt="tyler my beloved"/>
    </div>
</div>


<div className="text-md pt-1  text-footerBG"> Desserts
    <div>
        <div> Lemon Poppy Seed Cake with Raspberry Compote </div>
        <div> 10.00 </div>
    </div>
    <div>
        <p>
            House-baked lemon cake studded with poppy seeds, delicately flavored with fresh lemon zest and pure vanilla.
            Served warm with a bright raspberry compote and dollop of whipped mascarpone cream.
            A perfect balance of sweet, tart, and light flavors in every bite.
        </p>
        <Image height={50} width={50} src="/Lemon_Poppy_seed_torte.jpg" alt="tyler my beloved"/>
    </div>
    <div>
        <div> Flourless Chocolate Torte </div>
        <div> 11.00 </div>
    </div>
    <div>
        <p>
            Rich, decadent flourless chocolate torte made with premium dark chocolate and French butter.
            Topped with a cloud of fresh whipped cream, chocolate shavings, and a light dusting of cocoa powder.
            Gloriously fudgy center with a delicate crackled top - pure chocolate indulgence.
        </p>
        <Image height={50} width={50} src="/low_carb_keto_flourless_chocolate_torte.jpg" alt="tyler my beloved"/>
    </div>
</div>


<div className="text-md pt-1  text-footerBG"> Beverages
    <div>
        <div> Housemade Iced Lavender Tea </div>
        <div> 5.00 </div>
    </div>
    <div>
        <p>
            Delicately steeped organic lavender blossoms and premium black tea,
            lightly sweetened with local honey and served over ice with a fresh lavender sprig.
            A refreshing and elegant drink that captures the essence of our garden.
        </p>
        <Image height={50} width={50} src="/Iced_Lavender_Latte.jpg" alt="tyler my beloved"/>
    </div>
    <div>
        <div> Craft Local Beers </div>
        <div> 8.00 </div>
    </div>
    <div>
        <p>
            Rotating selection of craft beers from local breweries, celebrating the best of Willowbrook&#39;s artisanal brewing scene.
        </p>
        <Image height={50} width={50} src="/breweries_beer.jpg" alt="tyler my beloved"/>
    </div>
    <div>
        <div> Organic Wines </div>
        <div> 10.00 </div>
    </div>
    <div>
        <p>
            Thoughtfully curated selection of organic and biodynamic wines from sustainable vineyards.
            From crisp whites to robust reds, our wine list celebrates artisanal winemakers committed to environmental stewardship.
        </p>
        <Image height={50} width={50} src="/wine.jpg" alt="tyler my beloved"/>
    </div>
</div>
</>
  );
}