import { useRef } from "react"

function SignCanvas() {
    const signCanvas = useRef<HTMLCanvasElement>(null)
    return (
        <canvas ref={signCanvas} className="signCanvas">Your browser does not support th canvas element</canvas>
    )
}
export default SignCanvas