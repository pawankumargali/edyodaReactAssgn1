import React from 'react';
import RowItem from './RowItem';
import '../assets/css/Landing.css';
import landingSectionImg from '../assets/img/landing-section-image.png';
import userPinkIcon from '../assets/img/user-pink.png';
import userOrangeIcon from '../assets/img/user-orange.png';
import userBlueIcon from '../assets/img/user-blue.png';
import userRedIcon from '../assets/img/user-red.png';

function Landing() {
    const rowItems = [
        {   
            id:1,
            title: 'Dmm design',
            userIcon: userPinkIcon,
            day: '20 Dec',
            markColor: '#FFD8DC',
        },
        {   
            id:2,
            title: 'Blurr Animation',
            userIcon: userOrangeIcon,
            day: '22 Dec',
            markColor: '#FD6533',
            isSelected:true
        },
        {   
            id:3,
            title: 'Illustration',
            userIcon: userBlueIcon,
            day: '26 Dec',
            markColor: '#9FD096',
        },
        {   
            id:4,
            title: 'Refunds',
            userIcon: userRedIcon,
            day: '28 Dec',
            markColor: '#FFE29F',
        }
    ];
    return <section>
            <div id="caption-div">
                <h1>Stunning <br/>Workplace
                    <div id="dot"></div>
                </h1>
                <p>
                    With Stunning, remote teams can organize projects, manage shifting priorities,
                    and get work done.
                </p>
                <button>New Account</button>
                <div id="lg-table-div">
                    {rowItems.map(item => 
                        <RowItem
                            key={item.id}
                            {...item}
                        />
                    )}
                </div>
            </div>

            <div id="img-div">
                <img src={landingSectionImg} alt="landing section image" />
            </div>

            <div id="md-table-div">
                {rowItems.map(item => 
                    <RowItem
                        key={item.id}
                        {...item}
                    />
                )}
            </div>


           </section>
}

export default Landing;