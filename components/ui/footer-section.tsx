//import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";

//import LaunchUI from "@/components/logos/launch-ui";

export default function FooterSection() {
  return (
    <footer className="w-full">
      <Footer>
        <FooterContent>
          <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold text-background">Contact Info</h3>
            <p className="text-sm">
              Address: 123 Greenway Blvd, Willowbrook, NY 12030
            </p>
            <p className="text-sm">
              Phone: (555) 987-6543
            </p>
            <div className="grid grid-cols-3">
              <a href="/"><img src="/instagram_TGB.svg" alt="instagram" height={25} width={25}/></a>
              <a href="/"><img src="/facebook_TGB.svg" alt="facebook" height={25} width={25}/></a>
              <a href="/"><img src="/twitter_TGB.svg" alt="twitter" height={25} width={25}/></a>
            </div>
            <div></div>
          </FooterColumn>
          <FooterColumn>
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold text-background">Hours of Operation:</h3>
            <p className="text-sm">
              Monday – Thursday: 11:00 AM – 9:00 PM
            </p>
            <p className="text-sm">
              Friday – Saturday: 11:00 AM – 10:00 PM
            </p>
            <p className="text-sm">
              Sunday: 11:00 AM – 8:00 PM
            </p>
          </FooterColumn>
        </FooterContent>
        <FooterBottom></FooterBottom>
      </Footer>
    </footer>
  );
}
