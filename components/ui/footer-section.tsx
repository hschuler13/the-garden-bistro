//import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";

import LaunchUI from "@/components/logos/launch-ui";

export default function FooterSection() {
  return (
    <footer className="w-full">
      <Footer>
        <FooterContent>
          <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold text-background">Contact Info</h3>
            <p className="text-sm text-muted-foreground text-background">
              Address: 123 Greenway Blvd, Willowbrook, NY 12030
            </p>
            <p className="text-sm text-muted-foreground text-background">
              Phone: (555) 987-6543
            </p>
            <div>
              <a href="https://www.instagram.com/feliciathegoat/">a</a>
              <a href="https://www.facebook.com/TylerTheCreator/">b</a>
              <a href="https://x.com/tylerthecreator?lang=en">c</a>
            </div>
          </FooterColumn>
          <FooterColumn>
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold text-background">Hours of Operation:</h3>
            <p className="text-sm text-muted-foreground text-background">
              Monday – Thursday: 11:00 AM – 9:00 PM
            </p>
            <p className="text-sm text-muted-foreground text-background">
              Friday – Saturday: 11:00 AM – 10:00 PM
            </p>
            <p className="text-sm text-muted-foreground text-background">
              Sunday: 11:00 AM – 8:00 PM
            </p>
          </FooterColumn>
        </FooterContent>
        <FooterBottom></FooterBottom>
      </Footer>
    </footer>
  );
}
