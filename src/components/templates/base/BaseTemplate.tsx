export interface IBaseTemplate {
  sample: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sample }) => {
  return <div>Hello world!</div>;
};

export default BaseTemplate;
