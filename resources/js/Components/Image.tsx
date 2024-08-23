export default function Image({ className = "", ...props }) {
    return (
        <img
            {...props}
            className={className}
        />
    );
}
