<template>
  <footer>
    <div class="footer">
      <div>
        <h5>JSTORE</h5>
        <img src="../assets/play.jpg" alt="" /><br />
        <img src="../assets/app.jpg" alt="" />
      </div>
      <ul>
        <h6>Category</h6>
        <li><a href="#">Men's wear</a></li>
        <li><a href="#">Women's wear</a></li>
        <li><a href="#">Children's wear</a></li>
      </ul>
      <ul>
        <h6>Our Company</h6>
        <li><a href="#">About us</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <ul>
        <h6>Support</h6>
        <li><a href="#">Call us</a></li>
        <li><a href="#">Email us</a></li>
        <li><a href="#">Send us a message</a></li>
      </ul>
      <div>
        <h6>Follow Us</h6>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
      </div>
    </div>
    <div class="credit">
      <p>&copy; 2022, All rights reserved. JStore.</p>
      <p>Powered by The Face</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  padding: 100px 100px 50px;
  background: black;
  color: white;
}

.footer {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

h5 {
  font-size: 30px;
  margin-bottom: 20px;
}

h6 {
  font-size: 20px;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: #f9f9f9b8;
}

.credit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  font-size: 14px;
  padding-block: 20px;
  border-block: 2px solid rgba(255, 255, 255, 0.1);
}

li {
  list-style: none;
  margin-bottom: 15px;
}

i {
  margin-right: 15px;
  font-size: 26px;
}

@media (max-width: 480px) {
  footer {
    padding: 50px 20px;
  }

  .footer,
  .credit {
    flex-direction: column;
    gap: 20px;
  }

  .credit {
    align-items: unset;
  }
}
</style>
