export function ForEveryone() {
  return (
    <>
      <section>
        <figure>
          <blockquote className="w-full text-5xl shadow-none [text-wrap:balance]">
            We must recognise internet access as a basic right and we must work
            to make sure all young people can connect to a web that gives them
            the power to shape their world.
          </blockquote>
          <figcaption className="text-2xl">
            - Tim Berners-Lee on Web&apos;s 32nd Birthday
          </figcaption>
        </figure>
      </section>
      <section>
        <h1 className="r-fit-text max-w-7xl [text-wrap:balance]">
          The Kerala High Court declared that the right to have access to
          Internet becomes the part of right to education as well as right to
          privacy under Article 21 of the Constitution of India.
        </h1>
      </section>
      <section>
        <table className="max-w-full text-xl">
          <thead>
            <tr>
              <th>App</th>
              <th>No. of Violations (Android)</th>
              <th>No. of Violations (iOS)</th>
              <th>Average No. of Violations</th>
              <th>Accessibility Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PhonePe</td>
              <td>45</td>
              <td>44</td>
              <td>45</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>PayTM</td>
              <td>64</td>
              <td>87</td>
              <td>75</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>Swiggy</td>
              <td>67</td>
              <td>59</td>
              <td>63</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>Zomato</td>
              <td>75</td>
              <td>62</td>
              <td>69</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>Amazoni</td>
              <td>54</td>
              <td>52</td>
              <td>53</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Flipkart</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td>24</td>
              <td>21</td>
              <td>23</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Telegram</td>
              <td>33</td>
              <td>41</td>
              <td>37</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Uber</td>
              <td>35</td>
              <td>30</td>
              <td>33</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Ola</td>
              <td>41</td>
              <td>51</td>
              <td>46</td>
              <td>Medium</td>
            </tr>
          </tbody>
          <caption>
            AN EVALUATION OF THE ACCESSIBILITY OF TEN WIDELY USED APPS IN INDIA
            by Vidhi Centre for Legal Policy, I-Stem and Mission Accessibility
          </caption>
        </table>
      </section>
      <section>
        <h1 className="r-fit-text">
          <span>Accessibility is</span>
          <br />
          <span>for Everyone</span>
          <br />
          <span>by Everyone</span>
        </h1>
      </section>
      <section>
        <figure>
          <blockquote className="w-full text-5xl shadow-none [text-wrap:balance]">
            We are all just temporarily abled.
          </blockquote>
          <figcaption className="text-2xl">- Cindy Li</figcaption>
        </figure>
      </section>
      <section>
        <h1>
          <span>Accessibility is a </span>
          <br />
          Reverse Captcha
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-x-16">
          <ul className="flex flex-col gap-y-8">
            <li>Captchas are proof that the user is human.</li>
            <li>
              Accessibility is proof that the Website is build for humans.
            </li>
          </ul>
          <img
            src="/robot-staring-screen.png"
            alt="Comic of frustrated robot staring at the screen because they are not able to solve captcha"
          />
        </div>
      </section>
    </>
  );
}
