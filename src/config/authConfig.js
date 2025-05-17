export default {
    secret:
        process.env.JWT_SECRET ||
        '97d0211a4ab49b12620a4332d730ab7d91f5eb075eb294925672cfcf181b768023a2b10e0d7743f2ea28e2d14ac10e1e594d0062d10d89a5372c8f43b6b13a45',
    expiresIn: '15m',
}
