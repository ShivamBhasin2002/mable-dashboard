import {Spinner} from '@chakra-ui/react'

const Loading = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 bg-background h-screen">
        <div>
          <Spinner color="#ffffff" size="xl" />
        </div>
        <div className="text-3xl font-heading font-bold text-light">Loading</div>
      </div>
    );
}

export default Loading;