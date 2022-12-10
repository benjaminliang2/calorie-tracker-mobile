import renderer from 'react-test-renderer';
import { NutritionValue } from '../src/components/NutritionValue';

it('renders correctly', () => {
    const tree = renderer.create(<NutritionValue title="testing" valueConsumed={10} valueRequired={100}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });