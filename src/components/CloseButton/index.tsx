import { Button } from "./styles";

interface CloseButtonProps {
	handleClick: () => void;
}

function CloseButton({ handleClick }: CloseButtonProps) {
	return (
		<Button onClick={handleClick} className="button__close">
			<span className="button__close--first"></span>
			<span className="button__close--second"></span>
		</Button>
	);
}

export { CloseButton };
