import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="projects-start-section is-fullheight hero" id="projects">
                <div className="projects-header">Projects</div>
                <div className="projects-container">
                    <div class="columns features">
                        <div class="column is-4">
                            <div class="card is-shady">
                                <div class="card-image">
                                    <a href="#projects">
                                        <figure class="image is-4by3">
                                            <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h4>Click on image above</h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div class="card is-shady">
                                <div class="card-image">
                                    <a href="#projects">
                                        <figure class="image is-4by3">
                                            <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h4>Tempor orci dapibus faber in.</h4>
                                        <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                                            sed risus.</p>
                                        <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4 modal-button" data-target="modal-image">
                            <div class="card is-shady">
                                <div class="card-image">
                                    <a href="#projects">
                                        <figure class="image is-4by3">
                                            <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h4>Click anywhere on card</h4>
                                        <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <span class="button is-link modal-button" data-target="modal-image">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;