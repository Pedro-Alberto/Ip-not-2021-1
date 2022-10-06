import Link from "../../node_modules/next/link";

interface MenuItemProps{
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props: MenuItemProps){
    return(
        <li className={`hover:bg-gray-200`}>
            <Link href={props.url}>
            <a className={`flex flex-col font-light justify-center items-center w-20 h-20`}>
                {props.icone}
                <span className={`text-gray-600  text-xs`}>
                    {props.texto}
                </span>
            </a>
            </Link>
            
        </li>
    )
}