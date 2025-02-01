import Image from 'next/image'
import '../styles.css';  // Import the CSS file

export default function About() {
    return (
        <div className="about-container">
            <div className="grid grid-cols-2 center">
                <Image src="/Cafe GB2.jpg" height={200} width={150} alt="cafe" className="image-cafe"/>
                <Image src="/Outside GB.jpg" height={200} width={220} alt="cafe" className="image-outside"/>
            </div>
            

            <h3 className="heading font-bold">Our Story</h3>
            <p className="content">
                Welcome to Garden Bistro, where our motto is Bistro, Bliss and Bloom. At the Garden Bistro, every meal tells the story of creativity, care, and community.The Garden Bistro has been nested in downtown Willow brook for over 35 years where we have gratefully been more than a restaurant and  instead having been a place serving delicious and valuable connections with our Willow Brook community.
            </p>
           
            <h3 className="heading font-bold">Our Commitment to Sustainability</h3>
            <p className="content">
                At the Garden Bistro, we believe great ingredients create great meals that fuel great community.This is why we have a long history of partnering with local Willow Brook companies who share our same passions for sustainability, community, and ethical sourcing.
            </p>

            <h3 className="heading font-bold">Partnerships</h3>
            <p className="content"><span className="underline">Sprout & Spoon</span>  - a family-owned farm just 10 miles away, providing us with organic, handpicked produce that bursts with flavor and vitality.</p>
            <p className="content"><span className="underline">The Honeycomb Hideaway</span> - where free-range livestock are raised humanely, ensuring the highest quality meats that are as kind to the earth as they are to your taste buds.</p>
            <p className="content"><span className="underline">Clover & Co.</span> - a sustainable seafood supplier committed to protecting marine ecosystems while delivering the freshest catch to your plate. </p>
            <p className="content">
                By partnering with these companies, we hope to reduce our carbon footprint make ethical sourcing a priority and invest in our community along with the people within it.

            </p>

            <h3 className="heading font-bold">Our Community</h3>
            <p className="content">
                From hosting farm-to-table dinners and cooking workshops to supporting local charities and events, we are deeply committed to giving back to the community that inspires us every day. Join us for a meal that nourishes not just your body but also your soul, knowing that every bite supports a vision of a healthier planet and a thriving community. At The Garden Bistro, you’re always among friends.
            </p>

            <h2 className="closing text-footerBG">Let’s grow something beautiful together 🌸</h2>
        </div>
    );
}