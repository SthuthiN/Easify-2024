import * as React from 'react';
import { LatestUpdates } from '../../../../Common/Constants';
import './Content.scss';
class ContentComponent extends React.Component<{}>
{
    render() {
        return (
            <ul>
                {LatestUpdates.map((update) =>
                    <li className="p-1">{update}</li>)}
            </ul>
        )
    }
}
export default ContentComponent;