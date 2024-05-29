import React from 'react';
import { CheckCircleFill, XCircleFill, ClockFill } from 'react-bootstrap-icons';

interface StatusProps {
    status: string
    title: string;
}

class StatusIcon extends React.Component<StatusProps, {}> {

    getIcon(status: string) {
        switch (status) {
            case "Paid":
            case "Approved":
                return <span title={status}><CheckCircleFill className={status} /></span>
            case "Rejected":
                return <span title={status}><XCircleFill className={status} /></span>;
            case "Pending Verification":
            case "In Progress":
            case "Pending Validation":
            case "Pending Approval":
            default:
                return <span title={status}><ClockFill className={status} /></span>;
        }
    }

    render() {
        return this.getIcon(this.props.status);
    }
}

export default StatusIcon;