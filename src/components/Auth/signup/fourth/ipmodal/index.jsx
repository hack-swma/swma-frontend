import * as style from './index.style';
const Render = (props) => {
    const { open, close, header } = props;
    return (
        <style.background>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>{props.children}</main>
                    </section>
                ) : null}
            </div>
        </style.background>
    );
};
export default Render;