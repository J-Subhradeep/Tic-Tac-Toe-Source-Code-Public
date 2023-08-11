import * as React from 'react';
import { TechStacklWrapper } from './styles/techStack.styled';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
// import TreeItem from 'images/landing-page/techStack';

export default function FileSystemNavigator() {
  return (
    <TechStacklWrapper>
      <TreeView
        // defaultExpanded={false}
        defaultExpanded={['1', '5']}
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ minHeight: 240, flexGrow: 1, maxWidth: 400, overflow: 'hidden' }}
      >
        <TreeItem nodeId="1" label="Frontend" style={{ color: "white", fontFamily: "Arial", }}>
          <div className='node-wrapper' >
            <img className='icons' src='images/landing-page/techStack/js.png' />
            <span className='node'>JavaScript</span>
          </div>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/react.png' />
            <span className='node'>React JS</span>
          </div>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/mui.png' />
            <span className='node'>Material UI</span>
          </div>
        </TreeItem>
        <TreeItem nodeId="5" label="Backend" style={{ color: "white", fontFamily: "Arial" }}>
          {/* <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem> */}
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/python.png' />
            <span className='node'>Python</span>
          </div>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/dj.png' />
            <span className='node'>Django</span>
          </div>
        </TreeItem>
        <TreeItem nodeId="10" label="Database" style={{ color: "white", fontFamily: "Arial" }}>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/SQLite_Logo.png' style={{ height: "20px", width: "40px" }} />
            <span className='node'>SQLite</span>
          </div>
        </TreeItem>
        <TreeItem nodeId="15" label="WebSocket" style={{ color: "white", fontFamily: "Arial" }}>
          <div className='node-wrapper' >
            <img className='icons' src='images/landing-page/techStack/djch.png' style={{ width: "20px" }} />
            <span className='node'>Django Channels</span>
          </div>
          <div className='node-wrapper' >
            <img className='icons' src='images/landing-page/techStack/red.png' style={{ height: "10px", width: "20px" }} />
            <span className='node'>Redis</span>
          </div>
        </TreeItem>
        <TreeItem nodeId="20" label="Web Servers & Other Tools" style={{ color: "white", fontFamily: "Arial" }}>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/nginx.png' />
            <span className='node'>Nginx</span>
          </div>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/uvicorn.png' />
            <span className='node'>Uvicorn</span>
          </div>
          <div className='node-wrapper'>
            <img className='icons' src='images/landing-page/techStack/docker.png' />
            <span className='node'>Docker</span>
          </div>
        </TreeItem>
      </TreeView>
    </TechStacklWrapper>
  );
}