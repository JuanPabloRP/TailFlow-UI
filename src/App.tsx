import DarkModeToggle from './components/DarkModeToggle';
import CardWithButton from './examples/components/Cards/CardWithButton';
import CardWithFormInputs from './examples/components/Cards/CardWithFormInputs';
import CardWithImageXAxis from './examples/components/Cards/CardWithImageXAxis';
import CardWithImageYAxis from './examples/components/Cards/CardWithImageYAxis';
import DefaultCard from './examples/components/Cards/DefaultCard';

function App() {
	return (
		<main className="flex justify-center items-center min-h-screen  dark:bg-neutral-950">
			<section className="flex flex-wrap gap-2">
				<CardWithFormInputs />
			</section>
			<DarkModeToggle />
		</main>
	);
}

export default App;

// ###### Buttons imports ######
/*
import DefaultButton from './examples/components/Buttons/DefaultButton';
import GradientButtonV1 from './examples/components/Buttons/GradientButtonV1';
import GradientDuotoneButton from './examples/components/Buttons/GradientDuotoneButton';
import NeonButton from './examples/components/Buttons/NeonButton';
import OutlineButton from './examples/components/Buttons/OutlineButton';
import PillButton from './examples/components/Buttons/PillButton';
import SocialButton from './examples/components/Buttons/SocialButton';
*/
