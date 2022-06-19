<svelte:head>
    <title>Create an account</title>
</svelte:head>

<h1>Create an account</h1>

<form method="POST" action="/signup">
    <fieldset>
        <label for="email">Email</label>
        <input type="email" placeholder="user@email.net" name="email" required />
        <label for="password">Password</label>
        <input type="password" placeholder="Your password" name="password" required />
        <label for="password">Password, again</label>
        <input
            type="password"
            placeholder="Repeat the password, please"
            name="repeat-password"
            required
        />
        <input class="button-primary" type="submit" value="Signup" />
    </fieldset>
</form>
<p>Already have an account? <a href="/login">Login</a></p>

<style>
    form {
        max-width: 420px;
    }
</style>