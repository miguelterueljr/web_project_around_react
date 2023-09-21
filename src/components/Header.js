import usLogo from '../images/around-the-us-logo.png';

function Header () {
  return (
    <section class="header">
      <div class="header__logo">
        <img src={usLogo} alt="Logotipo around US" class="header__image" />
      </div>
      <hr class="header__line" />
    </section>
  )
}

export default Header;