import "./Middle.css";
import axios from 'axios';
import { useState, ChangeEvent } from "react";
import { Users } from "../Middle/UserInterfaces";
import loop from '../../images/icon-search.svg';
import locationImage from '../../images/icon-location.svg';
import twitterImage from '../../images/icon-twitter.svg';
import websiteImage from '../../images/icon-website.svg';
import companyImage from '../../images/icon-company.svg';

export default function Middle(props: { activeLight: boolean; }) {
    const [userName, setuserName] = useState(""); // Change to string
    const [users, setUsers] = useState<Users[]>([]); // Change initialization
    // const [activeLight, setActiveLight] = useState<boolean>(true);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setuserName(event.target.value); // Update state name to userName
    }

    const onSearch = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            const user = response.data;
            setUsers([user]); // Store the user object in an array
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div>
            <div className={`searchBarBox ${props.activeLight ? 'light' : 'dark'}`}>
                <div className="imgAndInputBox">
                    <img src={loop} alt='loop' />
                    <input className={`input ${props.activeLight ? 'light' : 'dark'}`} type="text" placeholder="Search GitHub username…" value={userName} onChange={onChange} />
                </div>
                {/* <div className="buttonBox"> */}
                <button className="button" onClick={onSearch}>Search</button>
                {/* </div> */}
            </div>
            <div className="infoBox" style={{ backgroundColor: props.activeLight ? '#FEFEFE' : '#1E2A47' }}>
                {users.map((user) => (
                    <div key={user.id} className="user-info">

                        <div className="firstPartOfUser">
                            <div className="iconBox">
                                <img src={user.avatar_url} className="imgClass" alt="User Avatar" />
                            </div>
                            <div className="nameLoginAndCreatedBox">
                                <div className="userNameAndLoginBox">
                                    <p className={`userName ${props.activeLight ? 'lightColorParagraph' : 'darkColorParagraph'}`}>
                                        {user.name}
                                    </p>
                                    <span className="userLogin">
                                        @{user.login}
                                    </span>
                                </div>
                                <div className="userCreatedBox" style={{ color: props.activeLight ? '#697C9A' : '#FFFFFF' }}>
                                    Joined {user.created_at}
                                </div>
                            </div>
                        </div>


                        <div className="blogBox" style={{ color: props.activeLight ? '#697C9A' : '#FFFFFF' }}><strong>Bio:</strong> {user.bio}</div>
                        {/* {user.} */}
                        <div className={`${props.activeLight ? 'reposFollowersBox' : 'reposFollowersBox reposFollowersBoxDark'}`}>
                            <div className="repoFollFollBoxes"><p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>Repos</p> <p className={`${props.activeLight ? 'numberRepos' : 'numberRepos whiteColor'}`}>{user.public_repos}</p></div>
                            <div className="repoFollFollBoxes"><p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>followers</p><p className={`${props.activeLight ? 'numberRepos' : 'numberRepos whiteColor'}`}>{user.followers}</p></div>
                            <div className="repoFollFollBoxes"><p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>following</p><p className={`${props.activeLight ? 'numberRepos' : 'numberRepos whiteColor'}`}>{user.following}</p></div>
                        </div>
                        {/* //////// */}
                        <div className="footerBox">
                            <div className="desktopVersion">
                                <div className="smth"><img src={locationImage} alt="location" className="lastImages" /> <p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>{user.location ? user.location : 'Not Available'}</p></div>
                                <div className="smth"><img src={websiteImage} alt="website" className="lastImages" /> <p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>{user.blog ? user.blog : 'Not Available'}</p></div>
                            </div>
                            <div className="desktopVersion">
                                <div className="smth"><img src={twitterImage} alt="twitter" className="lastImages" /><p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>{user.twitter_username ? user.twitter_username : 'Not Available'}</p></div>
                                <div className="smth"><img src={companyImage} alt="company" className="lastImages" /><p className={`${props.activeLight ? 'reposParagraph' : 'reposParagraph whiteColor'}`}>{user.company ? user.company : 'Not Available'}</p></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
