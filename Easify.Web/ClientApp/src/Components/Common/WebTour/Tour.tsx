import 'intro.js/introjs.css';
import introJs from 'intro.js';
import { Component } from 'react';
import { TourSteps, TabTourSteps } from '../../../Common/Constants';
import { IWebTour } from '../../../Interfaces/Common/IUserContext';

interface Props {
    stepstart: boolean;
    startTour: any;
    isResponsive: boolean;
    isDLR: boolean;
}
interface IState {
}

class Tour extends Component<Props, IState> {
    private intro = introJs();
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.exitTour = this.exitTour.bind(this);
    }

    componentDidUpdate() {
        if (this.props.stepstart) {
            this.intro = introJs();
            this.intro.setOptions({
                exitOnOverlayClick: false,
                showStepNumbers: false,
                showBullets: false,
                showProgress: false,
                exitOnEsc: false,
                tooltipClass: 'custom-tooltip-class',
                disableInteraction: true,
                scrollToElement: true,
                steps: this.getTourSteps(),
            });
            this.intro.start();
            this.intro.oncomplete(this.exitTour);
            this.intro.onexit(this.exitTour)
        }
    }
    exitTour() {
        this.props.startTour(false)
    }

    getTourSteps() {
        var steps = [];
        if (this.props.isResponsive) {
            steps = TabTourSteps;
        }
        else {
            steps = TourSteps;
        }
        return steps?.filter(function (obj) {
            return document.querySelector(obj.element) !== null;
        })
    }

    componentWillUnmount() {
        if (this.intro) {
            this.intro.exit(true);
            this.exitTour()

        }
    }

    render() {
        return null;
    }
}

export default Tour;
