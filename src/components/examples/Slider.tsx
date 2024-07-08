import Slider from "@react-ui/slider/Slider";

export const SliderExample = () => {
    return (
        <Slider.Root
            className="w-72 mx-auto"
            data-orientation="vertical"
            defaultValue={[50]}
            intent="primary"
            max={100}
            size="md"
            step={1}
        >
            <Slider.Track variant="soft" className="bg-gray-100">
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb
                aria-label="Volume"
                variant="fancy"
                size="md"
            />
        </Slider.Root>
    )
}