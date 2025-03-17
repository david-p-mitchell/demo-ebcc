import { Link } from '@/types/Link';
export class DropDownItemComponent {
    
    public title: string;
    private links: Link[];
    public sectionLink: string | null;
  
    constructor(title: string, links: Link[], sectionLink: string | null) {
      this.title = title;
      this.links = links;
      this.sectionLink = sectionLink
    }
  
    getLinks() {
      return this.links;
    }

    hasSectionLink(){
        return this.sectionLink !== null;
    }
  }