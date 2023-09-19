type TitleProps = {
	//type "struct"
	title: string
	className?: string
}

export default function Title(props: TitleProps) {
	// type deconstruct til invividuelle verdier
	const { title, className } = props
	return <h1 className={className}>{title}</h1>

}

//default kan importeres under hvilket som helst navn ved import, e.g import Title from "@/components/Title"
//uten default maa importeres som {Title}