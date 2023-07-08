const Facebook = ({w, h, c}) => {
    return ( 
        <div>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_128_14)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.14874 0 0 5.14874 0 11.5C0 17.8513 5.14874 23 11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14874 17.8513 0 11.5 0ZM12.6987 12.0051V18.2618H10.11V12.0054H8.81667V9.84932H10.11V8.55485C10.11 6.79592 10.8402 5.75 12.9151 5.75H14.6424V7.9063H13.5627C12.755 7.9063 12.7016 8.2076 12.7016 8.76995L12.6987 9.84908H14.6546L14.4257 12.0051H12.6987Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_128_14">
                <rect width={w} height={h} fill={c}/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}
 
export default Facebook;