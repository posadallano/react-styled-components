import styled from 'styled-components';

const ProgressBar = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    flex align-items: center;
    padding: 10px;
    &.up {
        text-align: left;
        background: rgba(28,187,180,0.7);
    }
    &.down {
        text-align: right;
        background: rgba(255,173,29,0.7);
    }
    .percent {
        font-weight: 300;
        font-size: 29px;
        padding-left: 7px;
        vertical-align: top;
    }
    .percentsign {
        font-weight: 300;
        font-size: 20px;
        margin: 0 3px;
        vertical-align: text-bottom;
    }
    .dislike {
        transform: rotate(180deg);
        padding-right: 4px;
    }
`;

export default ProgressBar;