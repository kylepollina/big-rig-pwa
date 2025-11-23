// Configuration file for YouTube playlists
// To add/edit playlists, simply modify this array

const playlists = [
  {
    name: "Big Rig Videos",
    // You can use a local file path OR a URL to an online image
    //icon: "icons/big-rig.svg",
    icon: "https://i.ytimg.com/vi/kSzdhoMfjvY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6SU8NTe5ouGVENMgje-zs7DTvdQ",
    // You can paste the full YouTube URL OR just the playlist ID
    url: "https://www.youtube.com/playlist?list=PL8vl8GG5vpQZUkZZN-MY9B_1FqALRUNM9",
    description: "Trucks and big rigs"
  },
  {
    name: "The Three Stooges",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Three_Stooges_1936_%28cropped%29.jpg/330px-The_Three_Stooges_1936_%28cropped%29.jpg",
    // Example with full URL: url: "https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
    // Example with just ID: url: "PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
    url: "https://www.youtube.com/playlist?list=PLiMyIj_ExWTLS9kDpI34Bhvmrj84v0gkB",
    description: "Three Stooges Episodes"
  },
  {
    name: "Truck Shows",
    // Example with online image:
    // icon: "https://example.com/my-icon.png"
    icon: "https://i.ytimg.com/vi/elwLHUjcbXI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDL_WwVdHCEBQwh75Nk4VLw-2-3RQ",
    url: "https://www.youtube.com/playlist?list=PL8vl8GG5vpQZK_h8zMwVaiBNCR1wq_pQS",
    description: "Truck Shows"
  }
];

// Instructions:
// 1. Copy the full YouTube playlist URL from your browser
//    Example: https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf
// 2. Paste it as the "url" value
// 3. For icons, you can use:
//    - Local file: "icons/my-icon.png"
//    - Online image: "https://example.com/icon.png"
