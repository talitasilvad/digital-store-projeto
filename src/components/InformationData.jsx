export const informationLinks = [
    {text: "Sobre Drip Store",
     link: "/about"},

    {text: "Segurança",
     link: "/security"},

    {text: "Wishlist",
     link: "/wishlist"},

    {text: "Blog",
     link: "/blog"},

    {text: "Trabalhe Conosco",
     link: "/workcontact"},

    {text: "Meus Pedidos",
     link: "/myorders"}
];

export const categoryLinks = [
    {text: "Camisetas",
     link: "/shirts"},

    {text: "Calças",
     link: "/pants"},

    {text: "Bonés",
     link: "/caps"},

    {text: "Headphones",
     link: "/headphones"},

    {text: "Tênis",
     link: "/shoes"}
];

export const contacLinks = [
    {text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
     link: "/address"},

    {text: "(85) 3051-3411",
     link: "/contactnumber"}

];


const Information = ({title, informations}) => {
    return ( 
        <>
          <div>
              <h4>{title}</h4>
              <ul>
                {informations.map((info, index) => (
                    <li key={index}>
                        <a href={info.link}>{info.text}</a>
                    </li>
                ))}
              </ul>
          </div>    
        </>
     );
}
 
export default Information;