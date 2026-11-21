export default function Button({
    childern,
    onClick,
    type='button',
    variant='primary'
}){
    const className =
    variant === 'danger'
    ? 'text-button delete-button'
    : 'button';

    return (
        <button
        type={ type }
        className={className}
        onClick={onClick}
        >
            {childern}   
        </button>
    );

}