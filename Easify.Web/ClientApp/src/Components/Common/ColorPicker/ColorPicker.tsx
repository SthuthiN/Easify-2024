import { Dialog } from 'office-ui-fabric-react';
import * as React from 'react';
import 'reactjs-popup/dist/index.css';
import './ColorPicker.scss';

export interface IColorPickerProps {
    
}
class ColorPickerComponent extends React.Component<IColorPickerProps>{

    changeColor(color: string) {
        document.documentElement.style.setProperty('--primary-color', color);
    }
   
    render() {
        return (
            <Dialog
                hidden={true}
                containerClassName="confirmation-popup-container"
            >
                <div className="color"></div>
                <div className="row">
                    <div className="col" onClick={() => this.changeColor('#fccf02')}>
                        <div className="yellow"></div>
                        <div className="">#fccf02</div>
                    </div>
                    <div className="col" onClick={() => this.changeColor('#00d87e')}>
                        <div className="green"></div>
                        <div className="">#00d87e</div>
                    </div>
                    <div className="col" onClick={() => this.changeColor('#00e5fa')}>
                        <div className="cyan"></div>
                        <div className="">#00e5fa</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={() => this.changeColor('#1f00e1')}>
                        <div className="blue"></div>
                        <div className="">#1f00e1</div>
                    </div>
                    <div className="col" onClick={() => this.changeColor('#7700ec')}>
                        <div className="indigo"></div>
                        <div className="">#7700ec</div></div>
                    <div className="col" onClick={() => this.changeColor('#ff00e1')}>
                        <div className="pink"></div>
                        <div className="">#ff00e1</div>
                    </div>
                </div>
            </Dialog >
        );
    }
}

export default ColorPickerComponent;