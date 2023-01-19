export interface IBaseTemplate {
  sampleProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleProp }) => {
  return <div>Hello world!</div>;
};

export default BaseTemplate;
