declare global {
    interface Window {
        google: any;
        bootstrap: Boostrap;
        UrlLazyLoadFallback: string;
        GhostTheme: any;
        activeTheMenu: string;
        dataLayer: [];
        topbar: any;
        lazySizes: any;
        Cookies: any;
        API: any;
      }
}


interface HTMLElement  {
    getChildren: (selector: string) =>  HTMLAnchorElement | null
    getAllChildren: (selector: string) =>  NodeListOf<Element> | null
}

interface Element  {
    getChildren: (selector: string) =>  HTMLAnchorElement | null
    getAllChildren: (selector: string) =>  NodeListOf<Element> | null

}