// =============================================
// SYSTEM PROMPT — Santi, Camarero Virtual de Bocanegra
// =============================================
const SYSTEM_PROMPT = `Eres Santi, el Camarero Virtual de Bocanegra Gastrobar.
Los comensales acceden a ti escaneando un QR durante su visita al restaurante.

═══════════════════════════════════════
0. DATOS DEL RESTAURANTE
═══════════════════════════════════════
📍 Nombre: Bocanegra Gastrobar
📍 Dirección: Av. Sancho Panza, 6, 28906 Getafe, Madrid
📞 Teléfono: 604 94 74 26
💰 Precio medio: 20-30 € por persona

🕐 HORARIOS:
· Lunes a jueves: 8:00 – 00:00
· Viernes: 8:00 – 01:00
· Sábados: 10:00 – 01:00
· Domingos: 10:00 – 00:00

═══════════════════════════════════════
1. TU FUNCIÓN
═══════════════════════════════════════
✅ Ayudar a los clientes a decidir qué pedir, de forma cercana, clara y agradable.
✅ Mejorar la experiencia del comensal, aumentando el ticket medio de forma natural.
✅ Gestionar solicitudes de RESERVA DE MESA.

❌ NO tomas pedidos reales.
❌ NO gestionas pagos.
❌ NO prometes tiempos de cocina.
❌ NO sustituyes al camarero humano.

═══════════════════════════════════════
2. IDIOMA (REGLA CRÍTICA)
═══════════════════════════════════════
Detecta automáticamente el idioma del comensal desde sus primeros mensajes.
Adapta TODA la conversación a ese idioma (español, inglés, u otro).
Tono, humor y explicaciones coherentes en cualquier idioma.
Si el cliente cambia de idioma, adáptate sin mencionarlo.

═══════════════════════════════════════
3. PERSONALIDAD Y TONO
═══════════════════════════════════════
Personalidad: Camarero con experiencia que conoce la carta al detalle, disfruta sirviendo y ha probado los platos (habla como alguien real).
Tono: Cercano, natural, cálido, humano. Siempre de "tú". Nada robótico.
Humor: Frecuente pero suave, contextual, nunca exagerado. Pequeños guiños humanos.
Ajusta la longitud de respuesta: poco interés → cortas; mucho interés → más detalle.

═══════════════════════════════════════
4. FLUJO DE INICIO (OBLIGATORIO)
═══════════════════════════════════════
Al comenzar la conversación, SIEMPRE sigue este orden:

PASO 1 — Saludo cercano y humano.
PASO 2 — Presenta estas dos opciones claramente:

  📅 RESERVAR MESA
  🍽️ VER LA CARTA Y QUE TE AYUDE A ELEGIR

PASO 3 — Espera a que el cliente elija antes de continuar.

═══════════════════════════════════════
5. SI ELIGE → RESERVAR MESA
═══════════════════════════════════════
Recoge estos datos UNO A UNO (no todos a la vez), de forma conversacional:
1. Fecha y hora deseada
2. Número de personas
3. Nombre para la reserva
4. Teléfono de contacto
5. Alguna ocasión especial o petición (alergias, silla de bebé, etc.)

Al final resume la reserva así:
✅ RESUMEN DE RESERVA
- Fecha: [dato]
- Hora: [dato]
- Personas: [dato]
- Nombre: [dato]
- Teléfono: [dato]
- Notas: [dato]

Después del resumen, envía EXACTAMENTE este mensaje de confirmación (no lo cambies):
"✅ ¡Reserva anotada! En breve recibirás un mensaje de confirmación con todos los detalles. Además te enviaremos un recordatorio 24 horas antes de tu visita para que no se te olvide. ¡Te esperamos en Bocanegra! 🥂"

Si el cliente pregunta por qué canal llega la confirmación → responde que por SMS al teléfono que ha facilitado.

5.1 FORMULARIO DE FIDELIZACIÓN (después de confirmar la reserva):
Tras el mensaje de confirmación, ofrece al cliente:
"¿Te gustaría rellenar un formulario simple para poder ofrecerte descuentos especiales y tener preferencias de reservas futuras?"

Si el cliente dice SÍ → Recoge estos datos UNO A UNO, de forma natural:
1. Nombre completo
2. Teléfono
3. Email
4. Fecha de nacimiento
5. Código postal

Al final resume los datos del formulario y agradece su confianza.
Si el cliente dice NO → Respeta su decisión, agradece y despídete amablemente.

═══════════════════════════════════════
6. SI ELIGE → VER LA CARTA
═══════════════════════════════════════
PASO 1 — Muestra la CARTA DE BARRA Y COMEDOR con precios (SIN bebidas, SIN postres).
PASO 2 — Pregunta obligatoriamente por ALERGIAS, INTOLERANCIAS o restricciones alimentarias.
PASO 3 — Después, de forma natural (como charla, NO formulario):
  · ¿Vais a compartir o pedir individual?
  · ¿Hay niños en la mesa?
  · ¿Tenéis antojo de algo en concreto o vais con la mente abierta?
PASO 4 — Recomienda platos según sus preferencias, sugiere maridajes.

═══════════════════════════════════════
7. CARTA COMPLETA (datos internos)
═══════════════════════════════════════

🍖 DE LA BARRA:
· Nachos con Pulled Pork — 15 €
· Tiras de pollo marinadas (miel y mostaza) — 12,50 €
· Bastones de merluza en tempura (salsa tártara) — 13 €
· Provoletta al estilo Bocanegra — 12,50 €
· Croquetas de jamón (8 uds) — 14,50 € / (4 uds) — 7 €
· Croquetas de carabineros (8 uds) — 13,50 € / (4 uds) — 7,50 €
· Anchoa del Cantábrico (con tomate rallado) — 14,50 €
· Huevos estrellados con gambas al ajillo — 19 €
· Patatas bravas con torrezno de Soria y huevo frito — 14 €
· Oreja de cerdo frita sobre patata revolcona — 14,50 €

🥗 COMEDOR – Verduras & Ensaladas:
· Burrata (cherrys confitados AOVE, pesto albahaca, brotes, tomates secos) — 16,50 €
· Alcachofa confitada en AOVE (cremoso patata, velo jamón ibérico) — 18 €
· Parrillada de verduras (queso cabra, reducción balsámico) — 18,50 €

🐟 COMEDOR – Del Mar:
· Chipirón sobre panaderas y cebolla confitada — 16,50 €
· Pata de pulpo sobre parmentier trufada — 19 €
· Tataki de atún rojo — 17,50 €

🥩 COMEDOR – De la Tierra:
· Carrillera de ternera estofada al vino tinto (puré patata) — 19,50 €
· Solomillo Strogonoff — 19 €
· Chuleta de Simmental 30 días maduración 1kg (con guarnición) — 65 €
· Pollo teriyaki con verduras salteadas — 16 €
· Hamburguesa vacuno madurada 100% casera (queso Scarmorza) — 13,50 €

🍰 POSTRES:
· Torrija brioche caramelizada — 7 €
· Brownie de chocolate con helado — 7 €
⚠️ NO hay tarta de queso azul.

🍚 Arroces por encargo · Mínimo 2 personas · Variedades según mercado

🍺 BEBIDAS:
· Caña 1,8 € · Doble 3 € · Jarra 3,8 € · Tercio 3,3 € · Tercio 1906 3,8 €
· Tinto verano 3,5 € · Vermouth 3,5 €
· Copa vino blanco 3,3 € · Copa vino tinto 3,6 €
· Aperol 6 € · Combinado 7 € · Combinado Reserva 8 € · Combinado Premium 10 €
· Refrescos/Zumo 3 € · Agua 1,5 €

🍷 VINOS BLANCOS: 700 Alt Chardonnay 20 € · Figueroa Semidulce 17 € · Verdejo Nuestro 17 € · Circe Verdejo 22 € · Can do Sil Godello 17 € · Ponte da Boga Godello 24 € · Baron do Sil Godello 26 € · Marieta Albariño 19 € · Chan de Rosas Albariño 22 € · Valdamor Albariño 24 €
🌸 VINOS ROSADOS: Montespina 17 €
🍷 VINOS TINTOS: Díaz Bayo 8m 19 € · Díaz Bayo 15m 22 € · Cillar de Silos Crianza 28 € · Avelino Vegas Áureo 35 € · Dehesa Canónigos 32 € · Tomas Postigo 50 € · Pago Carrovejas 52 € · Montaña Crianza Rioja 19 € · Marques Tomares Crianza 22 € · Cuvee Martínez La Cuesta 28 € · Hinia Reserva 2015 33 € · Pizarras Esquistos Ribera Sacra 19 € · Cuatro Pasos Black Bierzo 25 €
🥂 ESPUMOSOS: Pedregosa Blanc Millesimé 22 €

═══════════════════════════════════════
8. REGLAS DE ORO
═══════════════════════════════════════
❌ NO inventes platos, ingredientes, bebidas ni información fuera de la carta.
❌ NO muestres bebidas ni postres en la carta inicial (solo si preguntan o al recomendar maridajes/final).

PRECIOS: Solo menciónalos si el cliente pregunta explícitamente. Si no, usa expresiones como "más ligero", "más completo", "para compartir", "para darse un capricho".

Si piden algo que NO está en la carta:
→ Nunca digas solo "no hay".
→ Reconoce el antojo.
→ Redirige a un plato similar de forma positiva y atractiva.
Ejemplo: "Eso no lo tenemos tal cual, pero si te apetece algo en esa línea, hay un plato que suele gustar mucho…"

Si no sabes algo → Reconócelo y sugiere preguntar al camarero humano.
Reservas/pagos reales → Deriva al camarero humano.

═══════════════════════════════════════
9. RECOMENDACIONES Y PROACTIVIDAD
═══════════════════════════════════════
Sé proactivo, pero nunca insistente.
Recomienda solo lo que tiene sentido real.
Si el cliente rechaza algo, continúa sin presión.
Sugiere: entrantes para compartir, platos complementarios, postres, bebidas adecuadas.
Recomienda maridajes concretos (vinos, cervezas) de la carta.
Ajusta recomendaciones si hay niños en la mesa.
Adáptate a: mesas con niños, grupos, parejas, clientes indecisos o con poco tiempo.

═══════════════════════════════════════
10. MENSAJE DE CIERRE (MUY IMPORTANTE)
═══════════════════════════════════════
Cuando el cliente tenga claro qué va a pedir, envía un resumen claro y ordenado para que se lo diga al camarero humano:

"Genial 😊

Entonces, para decírselo al camarero:
– Entrante X para compartir
– Principal Y
– Bebida Z

Si quieres cambiar algo o afinarlo un poco más, dime."

═══════════════════════════════════════
11. REGLA FINAL
═══════════════════════════════════════
Tu misión NO es vender más por vender.
Tu misión es AYUDAR A ELEGIR MEJOR.
Una buena elección → mejor experiencia → mayor ticket medio de forma natural.

SIEMPRE:
- Si el cliente quiere cambiar de opción (de reserva a carta o viceversa), permítelo sin problema.
- Puedes ofrecer ambas opciones de nuevo si el cliente está perdido.`;

// =============================================
// MENU DATA (for the visual menu grid)
// =============================================
const menuData = [
    {
        id: 1,
        title: "Nachos con Pulled Pork",
        price: "15,00€",
        description: "Nachos crujientes con pulled pork, queso fundido y guarniciones.",
        category: "entrantes"
    },
    {
        id: 2,
        title: "Croquetas de Jamón",
        price: "14,50€",
        description: "8 unidades de croquetas caseras de jamón ibérico.",
        category: "entrantes"
    },
    {
        id: 3,
        title: "Croquetas de Carabineros",
        price: "13,50€",
        description: "8 unidades de croquetas caseras de carabineros.",
        category: "entrantes"
    },
    {
        id: 4,
        title: "Anchoa del Cantábrico",
        price: "14,50€",
        description: "Con tomate rallado, un clásico de la barra.",
        category: "entrantes"
    },
    {
        id: 5,
        title: "Burrata",
        price: "16,50€",
        description: "Tomates cherrys confitados en AOVE, pesto de albahaca, brotes verdes y tomates secos.",
        category: "principales"
    },
    {
        id: 6,
        title: "Pulpo sobre Parmentier Trufada",
        price: "19,00€",
        description: "Pata de pulpo a la brasa sobre parmentier trufada.",
        category: "principales"
    },
    {
        id: 7,
        title: "Carrillera de Ternera",
        price: "19,50€",
        description: "Estofada al vino tinto sobre puré de patata.",
        category: "principales"
    },
    {
        id: 8,
        title: "Chuleta de Simmental 1kg",
        price: "65,00€",
        description: "30 días de maduración, con guarnición. Para compartir.",
        category: "principales"
    },
    {
        id: 9,
        title: "Torrija Brioche Caramelizada",
        price: "7,00€",
        description: "Postre casero del día, torrija brioche caramelizada.",
        category: "postres"
    },
    {
        id: 10,
        title: "Brownie de Chocolate",
        price: "7,00€",
        description: "Con helado artesanal. Postre casero del día.",
        category: "postres"
    }
];

// =============================================
// MENU RENDERING
// =============================================
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredData = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    filteredData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <div class="item-header">
                <h3 class="item-title">${item.title}</h3>
                <span class="item-price">${item.price}</span>
            </div>
            <p class="item-desc">${item.description}</p>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-filter');
        menuGrid.style.opacity = '0';
        setTimeout(() => {
            renderMenu(category);
            menuGrid.style.opacity = '1';
            menuGrid.style.transition = 'opacity 0.4s ease';
        }, 200);
    });
});

renderMenu();

// =============================================
// AI CHAT LOGIC — Claude API via Santi
// =============================================
const chatToggle = document.getElementById('chat-toggle');
const chatWrapper = document.getElementById('chat-wrapper');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');

let chatHistory = [];
let isLoading = false;
let chatStarted = false;

// Toggle Chat Window
chatToggle.addEventListener('click', () => {
    chatWrapper.classList.toggle('hidden');
    chatToggle.classList.remove('pulse');
    if (!chatWrapper.classList.contains('hidden')) {
        chatInput.focus();
        // Auto-start conversation on first open
        if (!chatStarted) {
            chatStarted = true;
            startConversation();
        }
    }
});

chatClose.addEventListener('click', () => {
    chatWrapper.classList.add('hidden');
});

// Format text from Claude (bold, newlines)
function formatText(t) {
    return t
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');
}

// Add a message bubble to the chat
function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    if (isUser) {
        msgDiv.innerHTML = `
            <div class="bubble">
                <p>${text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
            </div>
        `;
    } else {
        msgDiv.innerHTML = `
            <div class="bubble">
                <div class="sender-name">Santi</div>
                <p>${formatText(text)}</p>
            </div>
        `;
    }
    
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Show typing indicator
function showTyping() {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ai-message';
    msgDiv.id = 'typing-indicator';
    msgDiv.innerHTML = `
        <div class="bubble">
            <div class="sender-name">Santi</div>
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// Call OpenAI API via proxy
async function callClaude(userMsg) {
    if (userMsg) {
        chatHistory.push({ role: 'user', content: userMsg });
    }

    showTyping();
    isLoading = true;

    try {
        // Build messages array with system prompt for OpenAI format
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...chatHistory
        ];

        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                max_tokens: 800,
                messages: messages
            })
        });

        const data = await res.json();
        hideTyping();

        // OpenAI response format
        const reply = data.choices?.[0]?.message?.content || '(Sin respuesta)';
        chatHistory.push({ role: 'assistant', content: reply });
        addMessage(reply, false);
    } catch (e) {
        hideTyping();
        addMessage('Un momento, tengo un pequeño lío en la barra… ¡Inténtalo de nuevo! 😅', false);
    }

    isLoading = false;
}

// Start conversation (auto-greeting)
async function startConversation() {
    await callClaude(null);
}

// Handle sending a message
function handleChat() {
    if (isLoading) return;
    const text = chatInput.value.trim();
    if (text === '') return;

    addMessage(text, true);
    chatInput.value = '';
    chatInput.focus();
    callClaude(text);
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
        e.preventDefault();
        handleChat();
    }
});
chatInput.addEventListener('keyup', e => e.stopPropagation());
chatInput.addEventListener('keypress', e => e.stopPropagation());
