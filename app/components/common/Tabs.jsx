import { useState } from 'react';

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="Wrapper d-md-flex d-block tabs" role="tablist">
        {children.map((child) => {
          const { label, href } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              href={href}
              aria-current={activeTab}
              onClick={onClickTabItem}
            />
          );
        })}
      </div>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return false;
          return child.props.children;
        })}
      </div>
    </>
  );
}

function Tab({ activeTab, label, onClick, href, ...rest }) {
  if (href) {
    return (
      <a
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        href={href}
        id="cardHover"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </a>
    );
  }
  return (
    <>
      <button
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        } buttonpro`}
        type="button"
        id="cardHover"
        onClick={() => onClick(label)}
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </button>
    </>
  );
}
